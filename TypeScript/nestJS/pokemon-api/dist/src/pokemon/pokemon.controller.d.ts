import { PokemonService } from './pokemon.service';
import { CreatePokemonDTO } from './dtos/create-pokemon.dto';
export declare class PokemonController {
    private readonly pokemonService;
    constructor(pokemonService: PokemonService);
    create(data: CreatePokemonDTO): string;
}
