import { Schema, PassportLocalSchema, PassportLocalDocument } from 'mongoose';
import { Flight } from '../../../domain/flight/flight';

export const FlightSchema =  new Schema(
    {
        _id: { type: Schema.Types.ObjectId, required: true, auto: true },
        pilot: { type:String, required: true},
        airplane: { type: String, required: true},
        destinationCity: { type: String, required: true},
        flightDate: { type: Date, required: true},
        passengers: [{
            type: Schema.Types.ObjectId,
            ref:  'Passenger'
        }]

    }, { timestamps: true },
);


export interface IFlightEntity extends Omit<Flight, '_id'>, PassportLocalDocument  {
    
}