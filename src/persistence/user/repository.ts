import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUserEntity } from './schema/user.schema';
import { IUserRepository } from 'src/domain/user/user.repository.interface';
import { User } from 'src/domain/user/user';
import { PassportLocalModel } from 'mongoose';
import { UserDTO } from 'src/api/users/userDto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserRepository implements IUserRepository {
	constructor(@InjectModel('User') private readonly user: PassportLocalModel<IUserEntity>) {}

    public UpdateById(userId: string, fields): Promise<User> {
        return;
    }

    public UpdateImage(userId: string, imageUrl:string): Promise<User> {
        console.log(imageUrl);
        return  new Promise<IUserEntity>((resolve, reject) => {
            this.user.findByIdAndUpdate(userId, { $addToSet: { image: imageUrl } }, { new: false })
            .then(result => {
                resolve(result);
            }).catch( err => {
                reject(err);
            })
        });
    }
    public FindAll(): Promise<User[]> {
        return;
    }

    public GetById(userId: string): Promise<User> {
        return new Promise<IUserEntity>((resolve, reject) => {
			this.user.findById(userId, (err: any, result: IUserEntity) => {
				if (err) {
					reject(err);
				}

				resolve(result);
			});
		});
    }

    public FindOne(username): Promise<User> {
        return new Promise<IUserEntity>((resolve, reject) => {
			this.user.findOne({ username } 
            )
            .then( result => {
                console.log(result)
                resolve(result);
              })
            .catch( err => {
               reject(err)
            });
            
		});
    }

    public FindByUsername(username: string): Promise<User> {
        return  new Promise<IUserEntity>((resolve, reject) => {
           this.user.findOne({username})
           .then( result => {
             resolve(result);
           })
           .catch( err => {
            reject(err)
           });
        });
    }

   

    public Create(userDto: UserDTO, hash): Promise<User> {
        
        

        return new Promise<IUserEntity>((resolve, reject) => {
            this.user.create({ ...userDto, password: hash})
                .then(result => {
                        resolve(result);
                }).catch( err => {
                    reject(err);
                });
            
        })
        
    }


}