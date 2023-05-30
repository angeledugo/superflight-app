import { Inject, Injectable } from "@nestjs/common";
import { IUserRepository } from "./user.repository.interface";

const UserRepo = () => Inject('UserRepo');
@Injectable()
export class FindOne {

    constructor(
		@UserRepo() private readonly userRepository: IUserRepository,
	) {}

   

	public  FindOne(userId) {
		return this.userRepository.FindOne(userId);
	}
}