import { Module } from '@nestjs/common';
import { Update } from './update';
import { UserRepositoryModule } from '../../persistence/user/usersRepository.module';
import { FindAll } from './findAll';
import { Create } from './create';
import { FindOne } from './findOne';
import { UpdateImage } from './updateImage';

@Module({
	imports: [
		UserRepositoryModule,
	],
	providers: [Update, FindAll, Create, FindOne, UpdateImage],
	exports: [Update, FindAll, Create, FindOne, UpdateImage],
})
export class UserModule {}