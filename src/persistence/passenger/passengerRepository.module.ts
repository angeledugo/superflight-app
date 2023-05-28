import { Module } from '@nestjs/common';
import { PassengerSchema } from './schema/passenger.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { PassengerRepoProvider } from './passengerPersistenceProvider';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Passenger', schema: PassengerSchema }])],
    providers: [PassengerRepoProvider],
    exports: [PassengerRepoProvider]
})
export class PassengerRepositoryModule {}
