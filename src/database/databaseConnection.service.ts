import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConnectionService {
    private readonly connectionString: string;

    constructor(private readonly configService: ConfigService) {
        this.connectionString = this.configService.get('URI_MONGODB');
    }

    public get = () : string => this.connectionString;


}
