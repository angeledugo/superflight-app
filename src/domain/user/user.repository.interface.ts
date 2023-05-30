import { User } from './user';

export interface IUserRepository {
	UpdateById(userId: string, updatedFields: Partial<User>): Promise<User>;
	UpdateImage(userId: string, imageUrl: string): Promise<User>;
	GetById(userId: string): Promise<User>;
	FindOne(username: string): Promise<User>;
	FindAll(): Promise<User[]>;
	FindByUsername(username): Promise<User>;
	Create(createFields: Partial<User>, hash): Promise<User>
}