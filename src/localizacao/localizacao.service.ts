import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProvinciaEntity } from './interface/provincias.entity';
import { MunicipioEntity } from './interface/municipios.entity';
import { EnderecoEntity } from './interface/enderecos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LocalizacaoService {
    constructor(
        @InjectRepository(ProvinciaEntity)
        private readonly provinciaRepository: Repository<ProvinciaEntity>,
        @InjectRepository(MunicipioEntity)
        private readonly municipioRepository: Repository<MunicipioEntity>,
        @InjectRepository(EnderecoEntity)
        private readonly enderecoRepository: Repository<EnderecoEntity>,
     ){}

     async getAllProvincias() : Promise<ProvinciaEntity[]> {
        return this.provinciaRepository.find();
     }

      async getAllMunicipios() : Promise<MunicipioEntity[]> {
        return this.municipioRepository.find();
     }

      async getAllEnderecos() : Promise<EnderecoEntity[]> {
        return this.enderecoRepository.find();
     }
}
