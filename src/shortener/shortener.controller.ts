// import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
// import {CreateShortURLDto} from './dto/create-shorturl.dto'
// import {ShortenerService} from './shortener.service'
// import { SseService } from '../sse/sse.service';


// @Controller('shortener')
// export class ShortenerController {
//     constructor(
//         private shortenerService: ShortenerService,
//         private readonly sseService: SseService,
//     ) {}

//   @Post()
//   create(@Body() createShortURLDto: CreateShortURLDto) {
//     console.log(`Controller POST ${createShortURLDto.sourceURL}`)
//     const response = this.shortenerService.createShortURL(createShortURLDto.sourceURL)

//     const eventData = { sourceURL: createShortURLDto.sourceURL, shortURL: response };
//     this.sseService.emitEvent(eventData);
    
//     return {status: 'ok'};
//   }

//   @Get(':url')
//   findExact(@Param('url') url: string) {
//     return {url: this.shortenerService.getShortURL(url)};
//   }
// }