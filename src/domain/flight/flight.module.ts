import { Module } from '@nestjs/common';
import { FlightRepositoryModule } from '../../persistence/flight/flightRepository.module';
import { FindAll } from './findAll';
import { Create } from './create';
import { AddPassenger } from './addPassenger';

@Module({
    imports: [FlightRepositoryModule],
    providers: [FindAll, Create, AddPassenger],
    exports: [FindAll, Create, AddPassenger]
})
export class FlightModule {}
