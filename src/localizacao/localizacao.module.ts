import { Module } from '@nestjs/common';
import { LocalizacaoController } from './localizacao.controller';
import { LocalizacaoService } from './localizacao.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvinciaEntity } from './interface/provincias.entity';
import { MunicipioEntity } from './interface/municipios.entity';
import { EnderecoEntity } from './interface/enderecos.entity';
import { CacheModule as  CacheModuleNest} from '@nestjs/cache-manager';
import { CacheModule } from 'src/cache/cache.module';
import { UserModule } from 'src/user/user.module';


@Module({
  imports: [
    CacheModuleNest.register(),
    CacheModule,
    TypeOrmModule.forFeature([ProvinciaEntity, MunicipioEntity, EnderecoEntity],
    ),
    UserModule,
  ],
  controllers: [LocalizacaoController],
  providers: [LocalizacaoService]
})
export class LocalizacaoModule {}
