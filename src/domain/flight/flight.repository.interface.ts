import { Flight } from "./flight";

export interface IFlightRepository {
    FindAll(): Promise<Flight[]>;
    Create(createFields: Partial<Flight>): Promise<Flight>;
    UpdateById(flightId: string, passengertId: string): Promise<Flight>;


}