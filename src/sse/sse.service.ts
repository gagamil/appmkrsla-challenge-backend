import { Injectable } from '@nestjs/common';
import { Subject } from 'rxjs';

@Injectable()
export class SseService {
  private eventSubject = new Subject<MessageEvent>();

  // Method to emit events
  emitEvent(data: any) {
    const messageEvent = { data } as MessageEvent;
    this.eventSubject.next(messageEvent);
  }

  // Method to get the observable for SSE
  getEventStream() {
    return this.eventSubject.asObservable();
  }
}