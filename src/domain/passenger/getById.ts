import { Inject, Injectable } from "@nestjs/common";
import { IPassengerRepository } from "./passenger.repository.interface";

const PassengerRepo = () => Inject('PassengerRepo');
@Injectable()
export class GetById {

    constructor(
		@PassengerRepo() private readonly passengerRepository: IPassengerRepository,
	) {}

    public  GetById(passengerId: string) {
		return this.passengerRepository.GetById(passengerId);
	}
}