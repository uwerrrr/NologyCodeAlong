// we use PartialType from @nestjs/mapped-types library to reference properties to create-pokemon.dto
// -> NO code repeat
// make create-pokemon.dto  a single source

import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonDTO } from './create-pokemon.dto';
import { IsNumber, IsOptional, Min } from 'class-validator';
export class UpdatePokemonDTO extends PartialType(CreatePokemonDTO) {
  // <=> copy properties from CreatePokemonDTO and make all field optional

  // add level property for update pokemon DTO
  @IsOptional()
  @IsNumber()
  @Min(2)
  level: number;
}
