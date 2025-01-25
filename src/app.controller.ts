import { Controller, Get, Param, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';
import {CreateShortURLDto} from './shortener/dto/create-shorturl.dto'
import {ShortenerService} from './shortener/shortener.service';
import { SseService } from './sse/sse.service';


@Controller()
export class AppController {
  constructor(
    private shortenerService: ShortenerService,
    private readonly sseService: SseService,
  ) {}

  @Get('/')
  serveStatic(@Res() res: Response) {
    res.sendFile(join(__dirname, '..', 'client', 'index.html'));
  }

  @Post('url')
    create(@Body() createShortURLDto: CreateShortURLDto) {
      console.log(`Controller POST ${createShortURLDto.sourceURL}`)
      const response = this.shortenerService.createShortURL(createShortURLDto.sourceURL)
  
      const eventData = { sourceURL: createShortURLDto.sourceURL, shortURL: response };
      this.sseService.emitEvent(eventData);
      
      return {status: 'ok'};
    }

  @Get(':url')
    findExact(@Param('url') url: string) {
      return {url: this.shortenerService.getShortURL(url)};
    }
}
