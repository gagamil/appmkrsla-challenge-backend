import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
// import { SseModule } from '../sse/sse.module';
import { ShortenerService } from './shortener.service';
// import {ShortenerController} from './shortener.controller'

@Module({
  providers: [ShortenerService],
  // controllers: [ShortenerController],
  imports: [
    // SseModule
    CacheModule.register(),
  ],
  
  
  exports: [ShortenerService]
})
export class ShortenerModule {}
