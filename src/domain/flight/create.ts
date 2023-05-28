import { Inject, Injectable } from "@nestjs/common";
import { IFlightRepository } from "./flight.repository.interface";
import { Flight } from "./flight";

const FlightRepo = () => Inject('FlightRepo');

@Injectable()
export class Create {
    constructor(
        @FlightRepo() private readonly flightRepository: IFlightRepository
    ) { }

    
    public  Create(createFields: Partial<Flight>) {
		return this.flightRepository.Create(createFields);
	}
}