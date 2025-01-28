import { IsUrl } from 'class-validator';

export class CreateShortURLDto {
  @IsUrl()
  sourceURL: string;
}