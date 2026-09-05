import { Module } from '@nestjs/common';
import { ProvinciaService } from './provincia.service';
import { ProvinciaController } from './provincia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvinciaEntity } from './interface/provincias.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProvinciaEntity]),],
  providers: [ProvinciaService],
  controllers: [ProvinciaController],
  exports: [ProvinciaService]
})
export class ProvinciaModule {}
