import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FlightSchema } from './schema/flight.schema';
import { FlightRepoProvider } from './flightPersistenceProvider';

@Module({
    imports: [MongooseModule.forFeature([
        { name: 'Flight', schema: FlightSchema },
        
    ])],
    providers: [FlightRepoProvider],
    exports: [FlightRepoProvider]
})
export class FlightRepositoryModule {}
