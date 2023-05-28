import { IPassenger } from "./passenger.interface";

export interface Iflight extends Document {
    
    pilot: string;
    airplane: string;
    destinationCity: string;
    flightDate: Date;
    passengers: IPassenger[];
}