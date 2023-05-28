import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { PassportLocalModel } from 'mongoose';
import { Flight } from "src/domain/flight/flight";
import { IFlightRepository } from "../../domain/flight/flight.repository.interface";
import { IFlightEntity } from "./schema/flight.schema";

@Injectable()
export class FlightRepository implements IFlightRepository{

    constructor(@InjectModel('Flight') private readonly flight: PassportLocalModel<IFlightEntity>){

    }

    public FindAll(): Promise<Flight[]> {        
        return new Promise<IFlightEntity[]>((resolve, reject) => {
            this.flight.find()
            .populate('passengers')
            .then(result => {
                resolve(result);
            })
            .catch( err => {
                reject(err);
            })
            
        });
    }

    public Create(createFields: Partial<Flight>): Promise<Flight> {
        return  new Promise<IFlightEntity>((resolve, reject) => {
            this.flight.create(createFields).then(result => {
                resolve(result);
            }).catch( err => {
                reject(err);
            })
        })
    }

    public UpdateById(flightId: string, passengertId: string): Promise<Flight> {
        return  new Promise<IFlightEntity>((resolve, reject) => {
            this.flight.findByIdAndUpdate(flightId, { $addToSet: { passengers: passengertId } }, { new: true })
            .populate('passengers').then(result => {
                resolve(result);
            }).catch( err => {
                reject(err);
            })
        });
    }
}