import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvinciaEntity } from './provincia/interface/provincias.entity';
import { MunicipioEntity } from './municipio/interface/municipios.entity';
import { EnderecoEntity } from './endereco/interface/enderecos.entity';
import { UserModule } from '../user/user.module';
import { ProvinciaModule } from './provincia/provincia.module';
import { MunicipioModule } from './municipio/municipio.module';
import { EnderecoModule } from './endereco/endereco.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([ProvinciaEntity, MunicipioEntity, EnderecoEntity],
    ),
    UserModule,
    ProvinciaModule,
    MunicipioModule,
    EnderecoModule,
  ],
  controllers: [],
  providers: []
})
export class LocalizacaoModule {}
