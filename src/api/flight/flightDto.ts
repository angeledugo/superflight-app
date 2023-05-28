import { Type } from "class-transformer";
import { IsString, IsNotEmpty, IsDate } from "class-validator";

export class FlightDto {

    @IsNotEmpty()
    @IsString()
    readonly pilot: string;
    @IsNotEmpty()
    @IsString()
    readonly airplane: string;
    @IsNotEmpty()
    @IsString()
    readonly destinationCity: string;
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    readonly flightDate: Date;
}