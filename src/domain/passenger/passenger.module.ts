import { Module } from '@nestjs/common';
import { PassengerRepositoryModule } from '../../persistence/passenger/passengerRepository.module';
import { FindAll } from './findAll';
import { GetById } from './getById';

@Module({
    imports: [
		PassengerRepositoryModule,
	],
	providers: [ FindAll, GetById],
	exports: [ FindAll, GetById],
})
export class PassengerModule {}
