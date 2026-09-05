import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProvinciaEntity } from './interface/provincias.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProvinciaService {
    constructor(
        @InjectRepository(ProvinciaEntity)
        private readonly provinciaRepository: Repository<ProvinciaEntity>,
    ) {}

    async getAllProvincias() : Promise<ProvinciaEntity[]> {
        return this.provinciaRepository.find();
     }

    async findProvinciaById(provinciaId: number): Promise<ProvinciaEntity | null> {
        return this.provinciaRepository.findOne({ where: { provinciaId } });
    }

    async createProvincia(provincia: ProvinciaEntity): Promise<ProvinciaEntity> {
        return this.provinciaRepository.save(provincia);
    }
}
