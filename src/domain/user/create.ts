import { Inject, Injectable } from "@nestjs/common";
import { IUserRepository } from "./user.repository.interface";
import { User } from "./user";

const UserRepo = () => Inject('UserRepo');
@Injectable()
export class Create {
	constructor(
		@UserRepo() private readonly userRepository: IUserRepository,
	) {}

    public Create(toCreate: Partial<User>, hash: string){
		return this.userRepository.Create(toCreate, hash);
	}
}