import { Provider } from "@nestjs/common";
import { PassengerRepository } from "./repository";

export const PassengerRepoProvider: Provider = {
    provide: 'PassengerRepo',
    useClass: PassengerRepository
}