import { Collection } from '@mikro-orm/core';
import { Pokemon } from './pokemon.entity';
export declare class PokemonTypes {
    id: number;
    name: string;
    pokemon: Collection<Pokemon, object>;
}
