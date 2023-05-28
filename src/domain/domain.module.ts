import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { FlightModule } from './flight/flight.module';
import { PassengerModule } from './passenger/passenger.module';

@Module({
  imports: [
		UserModule,
		FlightModule,
		PassengerModule,
	],
	exports: [
		UserModule,
		FlightModule,
		PassengerModule
	],
})
export class DomainModule {}
