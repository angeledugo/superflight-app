import { Injectable } from "@nestjs/common";
import { IPassengerRepository } from "../../domain/passenger/passenger.repository.interface";
import { Passenger } from "src/domain/passenger/passenger";
import { InjectModel } from "@nestjs/mongoose";
import { PassportLocalModel } from "mongoose";
import { IPassengerEntity } from "./schema/passenger.schema";

@Injectable()
export class PassengerRepository implements IPassengerRepository  {

    constructor(
        @InjectModel('Passenger') private readonly passenger: PassportLocalModel<IPassengerEntity>
    ){}
    public FindAll(): Promise<Passenger[]> {
        return new Promise<IPassengerEntity[]>((resolve, reject) => {
            this.passenger.find().then(result => {
                resolve(result);
            }).catch( err => {
                reject(err);
            })
            
        });
    }

    public GetById(passengerId: string): Promise<Passenger> {
		return new Promise<IPassengerEntity>((resolve, reject) => {
            this.passenger.findById(passengerId).then(result => {
                resolve(result);
            }).catch( err => {
                reject(err);
            })
            
        });
	}
}