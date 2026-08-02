import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalizacaoModule } from './localizacao/localizacao.module';
import { CacheModule } from './cache/cache.module';
import { UserService } from './user/user.service';

@Module({
  imports: [
    ConfigModule.forRoot({
    envFilePath: '.env.development.local',
    }), 
    //Configuração do TYPEORM
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any,
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      //synchronize: true, //Não deve ser usado em produção
      entities: [`${__dirname}/**/*.entity{.js,.ts}`],
      migrations: [`${__dirname}/migration/{.ts,*.js}`],
      migrationsRun: true,
    }),
    UserModule,
    LocalizacaoModule,
    CacheModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
