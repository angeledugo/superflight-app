import { Module } from '@nestjs/common';
import { Update } from './update';
import { UserRepositoryModule } from '../../persistence/user/usersRepository.module';
import { FindAll } from './findAll';

@Module({
	imports: [
		UserRepositoryModule,
	],
	providers: [Update, FindAll],
	exports: [Update, FindAll],
})
export class UserModule {}