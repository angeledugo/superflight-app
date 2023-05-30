import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { FlightController } from './flight/flight.controller';
import { PassengerController } from './passenger/passenger.controller';
import { DomainModule } from '../domain/domain.module';

@Module({
	controllers: [
		UsersController,
		FlightController,
		PassengerController,
	],
	imports: [ DomainModule ]
})
export class ApiModule {}
