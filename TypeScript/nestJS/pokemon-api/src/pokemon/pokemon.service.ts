import { Injectable } from '@nestjs/common';
import { CreatePokemonDTO } from './dtos/create-pokemon.dto';

@Injectable()
export class PokemonService {
  // create
  create(data: CreatePokemonDTO) {
    console.log('In service layer', data);
    return `Pokemon service creates a pokemon: ${JSON.stringify({ ...data })}`;
  }
}
