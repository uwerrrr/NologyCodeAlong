import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { PokemonTypes } from '../pokemon/entities/pokemon-types.entity';

const pokemonTypes = [
  'fire',
  'water',
  'grass',
  'electric',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'pyschic',
  'bug',
  'rock',
  'ghost',
  'dark',
  'dragon',
  'steel',
  'fairy',
];
export class PokemonTypesSeeder extends Seeder {
  async run(em: EntityManager): Promise<void> {
    pokemonTypes.forEach((type) => em.create(PokemonTypes, { name: type }));
  }
}
