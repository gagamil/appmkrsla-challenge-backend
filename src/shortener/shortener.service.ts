import { Injectable } from '@nestjs/common';
import {ShortURL} from './interfaces/shortener.interface'


@Injectable()
export class ShortenerService {
    private readonly short_url_list: ShortURL[] = [];

    createShortURL(sourceURL: string) {
        // if the sourceURL is already in the "database" then use it.
        const foundItem =  this.short_url_list.find((record) => record.sourceURL === sourceURL);
        const shortenedURL = generateRandomAlphanumeric10()

        const finalShortURL = foundItem ? foundItem.shortURL : shortenedURL
        this.short_url_list.push({
            sourceURL: sourceURL, 
            shortURL: finalShortURL,
            isAck: false,
        });
        return `http://localhost:3000/${finalShortURL}`;
      }

    getShortURL(shortURL: string): string {
        const foundItem =  this.short_url_list.find((record) => record.shortURL === shortURL);
        return foundItem ? foundItem.sourceURL : 'No data'
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