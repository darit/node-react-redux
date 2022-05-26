import { IsDecimal, IsInt, IsString } from 'class-validator';

export class CreateShowTvDto {
  @IsString()
  name: string;

  @IsInt()
  duration: number;

  @IsString()
  schedule: string;

  @IsString()
  poster: string;

  @IsDecimal()
  rating: number;

  @IsString()
  language: string;
}
