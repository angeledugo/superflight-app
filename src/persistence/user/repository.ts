import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUserEntity } from './schema/user.schema';
import { IUserRepository } from 'src/domain/user/user.repository.interface';
import { User } from 'src/domain/user/user';
import { PassportLocalModel } from 'mongoose';

@Injectable()
export class UserRepository implements IUserRepository {
	constructor(@InjectModel('User') private readonly user: PassportLocalModel<IUserEntity>) {}

    public UpdateById(userId: string, updatedFields: Partial<User>): Promise<User> {
        return;
    }

    public GetById(userId: string): Promise<User> {
        return;
    }

    public async FindAll(): Promise<User[]> {
        return  await this.user.find();
    }


}