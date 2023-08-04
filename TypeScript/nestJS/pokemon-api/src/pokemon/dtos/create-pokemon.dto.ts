import { Transform } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
  Min,
  MinLength,
} from 'class-validator';

enum PokemonType {
  FIRE = 'fire',
  WATER = 'water',
  GRASS = 'grass',
  ELECTRIC = 'electric',
  ICE = 'ice',
  FIGHTING = 'fighting',
  POISON = 'poison',
  GROUND = 'ground',
  FLYING = 'flying',
  PSYCHIC = 'psychic',
  BUG = 'bug',
  ROCK = 'rock',
  GHOST = 'ghost',
  DARK = 'dark',
  DRAGON = 'dragon',
  STEEL = 'steel',
  FAIRY = 'fairy',
  NORMAL = 'normal',
}
export class CreatePokemonDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  name: string;

  @IsEnum(PokemonType, { message: 'Invalid type. Use one of: $value' }) // 2. Executed second
  @Transform(({ value }) => value.toLowerCase()) // 1. Executed first // Transform the input value to lowercase before validation
  type: string;

  @IsNumber()
  @Min(5)
  hp: number;

  @IsUrl()
  imageLink: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  evolutionId: number;

  // method
  // public getStr(): string {
  //   return JSON.stringify({
  //     name: this.name,
  //     type: this.type,
  //     hp: this.hp,
  //     imageLink: this.imageLink,
  //     evolutionId: this.evolutionId,
  //   });
  // }
}
