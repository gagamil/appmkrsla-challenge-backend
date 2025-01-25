import { Module } from '@nestjs/common';
// import { SseModule } from '../sse/sse.module';
import { ShortenerService } from './shortener.service';
// import {ShortenerController} from './shortener.controller'

@Module({
  providers: [ShortenerService],
  // controllers: [ShortenerController],
  // imports: [SseModule],
  exports: [ShortenerService]
})
export class ShortenerModule {}
