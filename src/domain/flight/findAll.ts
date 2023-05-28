import { Inject, Injectable } from "@nestjs/common";
import { IFlightRepository } from "./flight.repository.interface";

const FlightRepo = () => Inject('FlightRepo');

@Injectable()
export class FindAll {
    constructor(
        @FlightRepo() private readonly flightRepository: IFlightRepository
    ) { }

    
    public  FindAll() {
		return this.flightRepository.FindAll();
	}
}