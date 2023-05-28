import { Schema, PassportLocalSchema, PassportLocalDocument } from 'mongoose';
import { Passenger } from '../../../domain/passenger/passenger';

export const PassengerSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, required: true, auto: true },
    name: {type: String, required:true},
    email: {type: String, required:true},
},{timestamps: true})

PassengerSchema.index({email: 1},{unique: true})

export interface IPassengerEntity extends Omit<Passenger, '_id'>, PassportLocalDocument  {}