import { Inject, Injectable } from "@nestjs/common";
import { IFlightRepository } from "./flight.repository.interface";
import { Flight } from "./flight";

const FlightRepo = () => Inject('FlightRepo');

@Injectable()
export class AddPassenger {
    constructor(
        @FlightRepo() private readonly flightRepository: IFlightRepository
    ) { }

    
    public  AddPassenger(idFlight: string, idPassenger: string) {
		return this.flightRepository.UpdateById(idFlight,idPassenger);
	}
}