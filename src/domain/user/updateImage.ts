import { Inject, Injectable } from "@nestjs/common";
import { IUserRepository } from "./user.repository.interface";
import { User } from "./user";

const UserRepo = () => Inject('UserRepo');
@Injectable()
export class UpdateImage {
	constructor(
		@UserRepo() private readonly userRepository: IUserRepository,
	) {}

    public async UpdateImage(userId, imageUrl): Promise<User> {
		return await this.userRepository.UpdateImage(userId, imageUrl);
	}
}