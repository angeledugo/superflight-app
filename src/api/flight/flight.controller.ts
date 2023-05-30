import { Body, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { FlightDto } from './flightDto';
import { FindAll } from '../../domain/flight/findAll';
import { Create } from '../../domain/flight/create';
import { GetById } from '../../domain/passenger/getById';
import { AddPassenger } from '../../domain/flight/addPassenger';

@Controller('api/v1/flight')
export class FlightController {
    constructor(
        private readonly findAllFlight: FindAll, private readonly createFlight: Create,
        private readonly addPass: AddPassenger,
        private readonly getById: GetById
    ) {
     
    }

    @Get()
    public async findAll() {
        return await this.findAllFlight.FindAll();
    }

    @Post() 
    public async create(@Body() flightDto: FlightDto) {            
            return await this.createFlight.Create(flightDto);
    }

    @Post(':flightId/passenger/:passengerId')
    async addPassenger(@Param('flightId') flightId: string,  @Param('passengerId') passengerId: string) {
        const passenger = await this.getById.GetById(passengerId);
        if(!passenger)
            throw new HttpException('Passenger not found', HttpStatus.NOT_FOUND);
        
        return await this.addPass.AddPassenger(flightId, passengerId);
        //return await this.findAllFlight.FindAll();
    }


}
