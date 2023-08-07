import { PokemonService } from './pokemon.service';
import { CreatePokemonDTO } from './dtos/create-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';
import { UpdatePokemonDTO } from './dtos/update-pokemon.dto';
export declare class PokemonController {
    private readonly pokemonService;
    constructor(pokemonService: PokemonService);
    create(data: CreatePokemonDTO): Promise<Pokemon>;
    findAll(): Promise<Pokemon[]>;
    findById(id: number): Promise<Pokemon>;
    updateById(id: number, data: UpdatePokemonDTO): Promise<Pokemon>;
    deleteById(id: number): Promise<void>;
}
