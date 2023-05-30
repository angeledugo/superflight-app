import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';

import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStategy } from './strategies/jwt-strategy';
import { AuthService } from './auth.service';
import { UserRepositoryModule } from '../persistence/user/usersRepository.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FileUploadService } from './file.upload.service';
import { DomainModule } from '../domain/domain.module';

@Module({
  imports: [UserRepositoryModule, DomainModule, PassportModule, JwtModule.registerAsync({
    imports: [ConfigModule,  ],
    inject: [ConfigService],
    useFactory: (config: ConfigService) => ({
      secret: config.get('JWT_SECRET'),
      signOptions: { 
        expiresIn: config.get('EXPIRES_IN'),
          audience: config.get('APP_URL'),
      }
    })
  }) ],
  providers: [LocalStrategy, JwtStategy, AuthService, FileUploadService],
  controllers: [AuthController]
})
export class AuthModule {}
