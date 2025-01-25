import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShortenerModule } from './shortener/shortener.module';
import { SseModule } from './sse/sse.module';

@Module({
  imports: [
    ShortenerModule,
    SseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
