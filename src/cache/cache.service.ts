import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import type { Cache } from 'cache-manager';


@Injectable()
export class CacheService {

    constructor(
        @Inject(CACHE_MANAGER) 
        private readonly cacheManager: Cache
    ){}
    
    //**
    // Implementar o caching dos municipios In-Memory (Em Memória) do computador
    //*/
    async getCache<T>(key: string, functionRequest: () => Promise<T>) : Promise<T> {

    //Carregando os municipios que estão no cache.
    const cache = await this.cacheManager.get<T>(key);

    //Verificar se existe municipios no cache e se tiver carrega.
    if(cache !== undefined && cache !== null){
        return cache;
    }

    const data: T = await functionRequest();

    //Antes de retornar inserá os municipios no cache.
    await this.cacheManager.set(key, data);
    

    return data;
    }
}
