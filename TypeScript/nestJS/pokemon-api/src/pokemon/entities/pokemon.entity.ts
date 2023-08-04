import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Pokemon {
  @PrimaryKey()
  id: number;

  @Property({ unique: true })
  name: string;
  @Property()
  type: string;
  @Property()
  hp: number;
  @Property()
  imageLink: string;
  @Property({ nullable: true })
  evolutionId: number;
  // @Property()
  // level: number;
}
