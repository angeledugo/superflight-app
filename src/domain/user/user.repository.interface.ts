import { User } from './user';

export interface IUserRepository {
	UpdateById(userId: string, updatedFields: Partial<User>): Promise<User>;
	GetById(userId: string): Promise<User>;
	FindAll(): Promise<User[]>
}