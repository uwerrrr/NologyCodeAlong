import { Collection } from '@mikro-orm/core';
import { PokemonTypes } from './pokemon-types.entity';
export declare class Pokemon {
    id: number;
    name: string;
    types: Collection<PokemonTypes, object>;
    hp: number;
    imageLink: string;
    evolutionId: number;
    level: number;
}
