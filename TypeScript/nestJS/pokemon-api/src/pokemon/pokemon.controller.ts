import { Body, Controller, Post } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDTO } from './dtos/create-pokemon.dto';

@Controller('/pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  create(@Body() data: CreatePokemonDTO) {
    return this.pokemonService.create(data);
  }
}
