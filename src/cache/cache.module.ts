import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { CacheService } from './cache.service';

@Module({
  imports: [
    CacheModule.register({
      isGlobal: true,
      ttl: 900000,
    }),
  ],
  providers: [CacheService],
  exports: [CacheService],
})
export class AppCacheModule {}
