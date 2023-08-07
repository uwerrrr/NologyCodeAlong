import { CreatePokemonDTO } from './dtos/create-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';
import { EntityRepository } from '@mikro-orm/mysql';
import * as O from 'fp-ts/lib/Option';
import { UpdatePokemonDTO } from './dtos/update-pokemon.dto';
export declare class PokemonService {
    private readonly pokemonRepository;
    constructor(pokemonRepository: EntityRepository<Pokemon>);
    create(data: CreatePokemonDTO): Promise<Pokemon>;
    findAll(): Promise<Pokemon[]>;
    findById(id: number): Promise<O.Option<Pokemon>>;
    updateById(id: number, data: UpdatePokemonDTO): Promise<O.Option<Pokemon>>;
    deleteById(id: number): Promise<boolean>;
}
