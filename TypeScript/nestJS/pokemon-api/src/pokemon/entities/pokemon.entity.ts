import {
  Collection,
  Entity,
  ManyToMany,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Expose } from 'class-transformer';
import { PokemonTypes } from './pokemon-types.entity';

@Entity()
export class Pokemon {
  @PrimaryKey()
  id: number;

  @Property({ unique: true })
  name: string;

  @ManyToMany(() => PokemonTypes, (types) => types.pokemon)
  types = new Collection<PokemonTypes>(this);

  @Property()
  hp: number;
  @Property()
  imageLink: string;
  @Property({ nullable: true })
  evolutionId: number;
  @Property()
  // @Expose({name:'level', })
  level: number;
}
