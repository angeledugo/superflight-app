import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { DomainModule } from '../domain/Domain.module';
import { FlightController } from './flight/flight.controller';
import { PassengerController } from './passenger/passenger.controller';

@Module({
	controllers: [
		UsersController,
		FlightController,
		PassengerController,
	],
	imports: [ DomainModule ]
})
export class ApiModule {}
