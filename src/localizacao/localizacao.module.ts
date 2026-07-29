import { Module } from '@nestjs/common';
import { LocalizacaoController } from './localizacao.controller';
import { LocalizacaoService } from './localizacao.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvinciaEntity } from './interface/provincias.entity';
import { MunicipioEntity } from './interface/municipios.entity';
import { EnderecoEntity } from './interface/enderecos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProvinciaEntity, MunicipioEntity, EnderecoEntity])],
  controllers: [LocalizacaoController],
  providers: [LocalizacaoService]
})
export class LocalizacaoModule {}
