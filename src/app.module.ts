import { Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { DatabaseModule } from './database/database.module';
import { DatabaseConnectionService } from './database/databaseConnection.service';
import { PersistenceModule } from './persistence/persistence.module';
import { ApiModule } from './api/api.module';
import { DomainModule } from './domain/domain.module';

import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';





@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true
  }),
  MongooseModule.forRootAsync({
		imports: [DatabaseModule],
		useFactory: (database: DatabaseConnectionService) => {
			return <MongooseModuleOptions>{
				uri: database.get(),
				useNewUrlParser: true,
				useUnifiedTopology: true,
			};
		},
		inject: [DatabaseConnectionService],
	}),
  PersistenceModule,
	ApiModule,
	DomainModule,
	AuthModule,
],
})
export class AppModule {

}
