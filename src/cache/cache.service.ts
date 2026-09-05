import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CacheService {
  constructor(
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  async getCache<T>(
    key: string,
    functionRequest: () => Promise<T>,
  ): Promise<T> {
    const cache = await this.cacheManager.get<T>(key);

    if (cache !== undefined && cache !== null) {
      return cache;
    }

    const data = await functionRequest();

    await this.cacheManager.set(key, data);

    return data;
  }
}
