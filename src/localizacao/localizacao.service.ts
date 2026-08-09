import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProvinciaEntity } from './interface/provincias.entity';
import { MunicipioEntity } from './interface/municipios.entity';
import { EnderecoEntity } from './interface/enderecos.entity';
import { Repository } from 'typeorm';
import { CacheService } from '../cache/cache.service';
import { UserService } from '../user/user.service';
import { CreateEnderecoDto } from './dtos/createEndereco.dto';

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
        private readonly userService: UserService,
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
               provinciaId: provinciaId
            },
         }
        }));
     }

      async getAllEnderecos() : Promise<EnderecoEntity[]> {
        return this.enderecoRepository.find({
         relations: {
            user: true,
            provincia: true,
            municipio: true
         }
        });
     }

     async createEndereco(createEnderecoDto: CreateEnderecoDto) : Promise<EnderecoEntity> {

         const user = await this.userService.findUserById(createEnderecoDto.userId);
         if(!user){
             throw new NotFoundException(`User with ID ${createEnderecoDto.userId} not found.`);
         }

         const provincia = await this.provinciaRepository.findOne({ where: { provinciaId: createEnderecoDto.provinciaId } });
         if(!provincia){
             throw new NotFoundException(`Provincia with ID ${createEnderecoDto.provinciaId} not found.`);
         }

         const municipio = await this.municipioRepository.findOne({ where: { municipioId: createEnderecoDto.municipioId } });
         if(!municipio){
             throw new NotFoundException(`Municipio with ID ${createEnderecoDto.municipioId} not found.`);
         }
      
         const enderecoDto = this.enderecoRepository.create({
            user: user,
            provincia: provincia,
            municipio: municipio,
            comuna: createEnderecoDto.comuna,
            bairro: createEnderecoDto.bairro,
            rua: createEnderecoDto.rua,
            numero: createEnderecoDto.numero,
            referencia: createEnderecoDto.referencia,
            codigoPostal: createEnderecoDto.codigoPostal,
            latitude: createEnderecoDto.latitude,
            longitude: createEnderecoDto.longitude,
         });

         return this.enderecoRepository.save(enderecoDto);
     }
}
