import { Controller, Sse, MessageEvent } from '@nestjs/common';
import { Observable } from 'rxjs';
import { SseService } from './sse.service';

@Controller('events')
export class EventsController {
  constructor(private readonly sseService: SseService) {}

  @Sse('sse')
  sse(): Observable<MessageEvent> {
    return this.sseService.getEventStream();
  }
}