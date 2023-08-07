import {
  Collection,
  Entity,
  ManyToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Pokemon } from './pokemon.entity';

@Entity()
export class PokemonTypes {
  @PrimaryKey()
  id: number;

  @Property()
  name: string;

  // @Property()
  // typeColor: string;

  @ManyToMany(() => Pokemon, (pokemon) => pokemon.types, { owner: true })
  pokemon = new Collection<Pokemon>(this);
}
