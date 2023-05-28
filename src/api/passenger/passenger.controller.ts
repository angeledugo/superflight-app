import { Controller, Get } from '@nestjs/common';
import { FindAll } from '../../domain/passenger/findAll';

@Controller('api/v1/passenger')
export class PassengerController {
    constructor(
        private readonly findAllPassenger: FindAll
    ){}

    @Get()
    public async findAll() {
        return await this.findAllPassenger.FindAll();
    }
}
