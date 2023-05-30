import { Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { IUserRepository } from "../domain/user/user.repository.interface";

import { JwtService } from "@nestjs/jwt";
import  * as bcrypt from 'bcrypt';
import { UserDTO } from "src/api/users/userDto";

const UserRepo = () => Inject('UserRepo');
@Injectable()
export class AuthService {

    constructor(
		@UserRepo() private readonly userRepository: IUserRepository,
		private readonly jwtService: JwtService
	) {}

    async  validateUser(username: string, password: string) {

		const user = await this.userRepository.FindByUsername(username);
		
		
		
		const isValidPassword = await  this.CheckPassword(password, user.password);

        if(user && isValidPassword){
            return user;
        }

        return null;
		
	}

	

    async signIn(user:any) {
        const payload = {
            username: user.username,
            sub: user._id
        };

        return {
            access_token: this.jwtService.sign(payload)
        }

    }

	

    async CheckPassword(password: string, passwordDb: string): Promise<Boolean> {
        return await bcrypt.compare(password, passwordDb);
    }

    async signUp(userDTO: UserDTO) {
        return userDTO;
        //return this.userService.create(userDTO);
      }

    async hashPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    }
}