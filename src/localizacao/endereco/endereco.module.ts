import { Module } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { EnderecoController } from './endereco.controller';
import { ProvinciaModule } from '../provincia/provincia.module';
import { MunicipioModule } from '../municipio/municipio.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppCacheModule } from '../../cache/cache.module';
import { EnderecoEntity } from './interface/enderecos.entity';
import { UserModule } from '../../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([EnderecoEntity]),
    AppCacheModule,
    UserModule,
    ProvinciaModule, 
    MunicipioModule,
  ],
  providers: [EnderecoService],
  controllers: [EnderecoController]
})
export class EnderecoModule {}
