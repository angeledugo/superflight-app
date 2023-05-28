import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserSchema } from './schema/user.schema';
import { UserRepoProvider } from './usersPersistenceProvider';

@Module({
	imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
	providers: [UserRepoProvider],
	exports: [UserRepoProvider],
})
export class UserRepositoryModule {}