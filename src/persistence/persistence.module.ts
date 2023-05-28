import { Module } from '@nestjs/common';
import { UserRepositoryModule } from './user/usersRepository.module';
import { FlightRepositoryModule } from './flight/flightRepository.module';
import { PassengerRepositoryModule } from './passenger/passengerRepository.module';


@Module({
	imports: [
		UserRepositoryModule,
		FlightRepositoryModule,
		PassengerRepositoryModule
	],
	exports: [
		UserRepositoryModule
	],
})
export class PersistenceModule {}