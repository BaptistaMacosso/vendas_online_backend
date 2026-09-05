import { Module } from '@nestjs/common';
import { MunicipioController } from './municipio.controller';
import { MunicipioService } from './municipio.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MunicipioEntity } from './interface/municipios.entity';
import { AppCacheModule } from '../../cache/cache.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([MunicipioEntity]),
    AppCacheModule,
  ],
  controllers: [
    MunicipioController,
  ],
  providers: [
    MunicipioService,
  ],
  exports: [
    MunicipioService,
  ],
})
export class MunicipioModule {}
