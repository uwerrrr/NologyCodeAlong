import { IsNotEmpty } from 'class-validator';

enum PokemonType {
  FIRE = 'fire',
  WATER = 'water',
  GRASS = 'grass',
  ELECTRIC = 'electric',
  ICE = 'ice',
  FIGHTING = 'fighting',
  POISON = 'poison',
  GROUND = 'ground',
  FLYING = 'flying',
  PSYCHIC = 'psychic',
  BUG = 'bug',
  ROCK = 'rock',
  GHOST = 'ghost',
  DARK = 'dark',
  DRAGON = 'dragon',
  STEEL = 'steel',
  FAIRY = 'fairy',
  NORMAL = 'normal',
}
export class CreatePokemonDTO {
  @IsNotEmpty()
  name: string;

  type: string;

  hp: number;

  imageLink: string;

  evolutionId: number;

  level: number;
}
