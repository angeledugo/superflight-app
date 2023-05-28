import { Inject, Injectable } from "@nestjs/common";
import { IPassengerRepository } from "./passenger.repository.interface";

const PassengerRepo = () => Inject('PassengerRepo');
@Injectable()
export class FindAll {

    constructor(
		@PassengerRepo() private readonly passengerRepository: IPassengerRepository,
	) {}

    public  FindAll() {
		return this.passengerRepository.FindAll();
	}
}