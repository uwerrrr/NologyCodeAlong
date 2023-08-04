import { Controller } from '@nestjs/common';
import { PokemonService } from './pokemon.service';

@Controller('/pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService);
}
