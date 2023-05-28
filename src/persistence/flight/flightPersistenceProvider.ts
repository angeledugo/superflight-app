import { Provider } from "@nestjs/common";
import { FlightRepository } from "./repository";

export const FlightRepoProvider: Provider = {
    provide: 'FlightRepo',
    useClass: FlightRepository
}