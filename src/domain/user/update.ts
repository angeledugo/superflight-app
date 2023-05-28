import { Inject, Injectable } from "@nestjs/common";
import { IUserRepository } from "./user.repository.interface";

const UserRepo = () => Inject('UserRepo');
@Injectable()
export class Update {
	constructor(
		@UserRepo() private readonly userRepository: IUserRepository,
	) {}

    public async Update(): Promise<void> {
		await this.userRepository.FindAll();
	}
}