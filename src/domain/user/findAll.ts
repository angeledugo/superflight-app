import { Inject, Injectable } from "@nestjs/common";
import { IUserRepository } from "./user.repository.interface";

const UserRepo = () => Inject('UserRepo');
@Injectable()
export class FindAll {

    constructor(
		@UserRepo() private readonly userRepository: IUserRepository,
	) {}

    public  FindAll() {
		return this.userRepository.FindAll();
	}
}