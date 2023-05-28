import { Passenger } from "./passenger";

export interface IPassengerRepository {
    FindAll(): Promise<Passenger[]>;
    GetById(passengerId: string): Promise<Passenger>;
}