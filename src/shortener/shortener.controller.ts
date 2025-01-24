import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import {CreateShortURLDto} from './dto/create-shorturl.dto'
import {ShortenerService} from './shortener.service'


@Controller('shortener')
export class ShortenerController {
    constructor(private shortenerService: ShortenerService) {}

  @Post()
  create(@Body() createShortURLDto: CreateShortURLDto) {
    const response = this.shortenerService.createShortURL(createShortURLDto.sourceURL)
    return response;
  }

  @Get(':url')
  findOne(@Param('url') url: string) {
    return this.shortenerService.getShortURL(url);
  }
}