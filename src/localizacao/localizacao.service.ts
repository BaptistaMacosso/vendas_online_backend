import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProvinciaEntity } from './interface/provincias.entity';
import { MunicipioEntity } from './interface/municipios.entity';
import { EnderecoEntity } from './interface/enderecos.entity';
import { Repository } from 'typeorm';
import { CacheService } from 'src/cache/cache.service';

@Injectable()
export class LocalizacaoService {
    constructor(
        @InjectRepository(ProvinciaEntity)
        private readonly provinciaRepository: Repository<ProvinciaEntity>,
        @InjectRepository(MunicipioEntity)
        private readonly municipioRepository: Repository<MunicipioEntity>,
        @InjectRepository(EnderecoEntity)
        private readonly enderecoRepository: Repository<EnderecoEntity>,
        private readonly cacheService: CacheService,
     ){}

     async getAllProvincias() : Promise<ProvinciaEntity[]> {
        return this.provinciaRepository.find();
     }

      async getAllMunicipios() : Promise<MunicipioEntity[]> {
        return this.municipioRepository.find();
     }

     //Foi Implementado o cache em memoria.
     async getMunicipiosByPronviciaId(provinciaId: number) : Promise<MunicipioEntity[]> {

        return this.cacheService.getCache<MunicipioEntity[]>(`${provinciaId}`, () => this.municipioRepository.find({
         where: { 
            provincia: {
               id: provinciaId
            },
         }
        }));
     }

      async getAllEnderecos() : Promise<EnderecoEntity[]> {
        return this.enderecoRepository.find();
     }

     async createEndereco(endereco: EnderecoEntity, userId: number) : Promise<EnderecoEntity> {
        return this.enderecoRepository.save(endereco, { data: { userId } });
     }
}
