import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MunicipioEntity } from './interface/municipios.entity';
import { Repository } from 'typeorm';
import { CacheService } from '../../cache/cache.service';

@Injectable()
export class MunicipioService {
    constructor(
        @InjectRepository(MunicipioEntity)
        private readonly municipioRepository: Repository<MunicipioEntity>,
        private readonly cacheService: CacheService,
    ){}
    
    async getAllMunicipios() : Promise<MunicipioEntity[]> {
        return this.municipioRepository.find();
    }

    //Foi Implementado o cache em memoria.
    async getMunicipiosByPronviciaId(provinciaId: number) : Promise<MunicipioEntity[]> {
        return this.cacheService.getCache<MunicipioEntity[]>(`${provinciaId}`, () => this.municipioRepository.find({
            where: { 
            provincia: {
                provinciaId: provinciaId
            },
            }
        }));
    }

    async findMunicipioById(municipioId: number): Promise<MunicipioEntity | null> {
        return this.municipioRepository.findOne({where: { municipioId }});
    }

    async createMunicipio(createMunicipio: MunicipioEntity): Promise<MunicipioEntity>{
        return this.municipioRepository.save(createMunicipio);
    }
}
