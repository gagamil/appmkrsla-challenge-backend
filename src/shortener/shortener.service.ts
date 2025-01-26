import { Injectable, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import {ShortURL} from './interfaces/shortener.interface'


@Injectable()
export class ShortenerService {
    constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}
    // private readonly short_url_list: ShortURL[] = [];

    async createShortURL(sourceURL: string): Promise<string> {
        // if the sourceURL is already in the "database" then use it.
        
        const foundItem = await this.cacheManager.get(sourceURL);
        const shortenedURL = generateRandomAlphanumeric10();

        const finalShortURL = foundItem ? foundItem['shortURL'] : shortenedURL;
        
        const data = {
            sourceURL: sourceURL, 
            shortURL: finalShortURL,
            isAck: false,
        }
        // cache key and target value
        await this.cacheManager.set(sourceURL, data);
        await this.cacheManager.set(finalShortURL, data);

        return `http://localhost:3000/${finalShortURL}`;
      }

    async getShortURL(shortURL: string): Promise<string> {
        const foundItem = await this.cacheManager.get(shortURL);
        return foundItem ? foundItem['sourceURL'] : 'No data'
    }
}

/**
 * 
 * @returns random 10 symbol string
 * TODO: Probably can use other mechanics
 */
function generateRandomAlphanumeric10() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return Array.from({ length: 10 }, () => 
      characters[Math.floor(Math.random() * characters.length)]
    ).join('');
  }