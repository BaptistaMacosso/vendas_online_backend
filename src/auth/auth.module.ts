import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import type { StringValue } from 'ms'; // Importa o tipo StringValue do pacote 'ms' para ser usado na configuração do JWT

@Module({
  imports: [UserModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET!,
        signOptions: { 
          expiresIn: ( process.env.JWT_EXPIRES_IN) as StringValue,
        },
      }),
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
