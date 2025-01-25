import { Module } from '@nestjs/common';
import { EventsController } from './sse.controller';
import { SseService } from './sse.service';

@Module({
  controllers: [EventsController],
  providers: [SseService],
  exports: [SseService],
})
export class SseModule {}