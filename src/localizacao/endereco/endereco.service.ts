import { Injectable, NotFoundException } from '@nestjs/common';
import { EnderecoEntity } from './interface/enderecos.entity';
import { CreateEnderecoDto } from './dtos/createEndereco.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CacheService } from '../../cache/cache.service';
import { UserService } from '../../user/user.service';
import { ProvinciaService } from '../provincia/provincia.service';
import { MunicipioService } from '../municipio/municipio.service';

@Injectable()
export class EnderecoService {
    constructor(
            @InjectRepository(EnderecoEntity)
            private readonly enderecoRepository: Repository<EnderecoEntity>,
            private readonly cacheService: CacheService,
            private readonly userService: UserService,
            private readonly provinciaService: ProvinciaService,
            private readonly municipioService: MunicipioService,
         ){}
    
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
    
             const provincia = await this.provinciaService.findProvinciaById(createEnderecoDto.provinciaId);
             if(!provincia){
                 throw new NotFoundException(`Provincia with ID ${createEnderecoDto.provinciaId} not found.`);
             }
    
             const municipio = await this.municipioService.findMunicipioById(createEnderecoDto.municipioId);
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
