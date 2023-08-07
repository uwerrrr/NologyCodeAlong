import { Injectable } from '@nestjs/common';
import { CreatePokemonDTO } from './dtos/create-pokemon.dto';
import { plainToInstance } from 'class-transformer';
import { Pokemon } from './entities/pokemon.entity';
import { EntityRepository } from '@mikro-orm/mysql';
import { InjectRepository } from '@mikro-orm/nestjs';
import * as O from 'fp-ts/lib/Option';
import { UpdatePokemonDTO } from './dtos/update-pokemon.dto';
import { wrap } from '@mikro-orm/core';

@Injectable()
export class PokemonService {
  // set up repository layer
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: EntityRepository<Pokemon>,
  ) {}

  // create
  async create(data: CreatePokemonDTO): Promise<Pokemon> {
    console.log('In service layer', data);

    const newPokemon = plainToInstance(Pokemon, data);
    // Converts plain (literal) object to class (constructor) object. Also works with arrays.
    // plainToInstance(class, plain object);

    newPokemon.level = 1; // add level property to object
    console.log('newPokemon: ', newPokemon);

    // save newPokemon to database - returns a promise
    await this.pokemonRepository.getEntityManager().persistAndFlush(newPokemon);

    return newPokemon;
  }

  // find all
  async findAll(): Promise<Pokemon[]> {
    return await this.pokemonRepository.findAll();
  }

  // find by id
  // we use fp-ts library to have Option (like Optional data type in Spring)
  async findById(id: number): Promise<O.Option<Pokemon>> {
    const result = await this.pokemonRepository.findOne({ id: id }); // find * where id field = id value
    //findOne(): Finds first entity matching your where query.

    return O.fromNullable(result);
  }

  // update by id
  async updateById(
    id: number,
    data: UpdatePokemonDTO,
  ): Promise<O.Option<Pokemon>> {
    const maybeFoundPokemon = await this.findById(id);

    if (O.isNone(maybeFoundPokemon)) {
      return maybeFoundPokemon;
    }
    const foundPokemon = maybeFoundPokemon.value;

    wrap(foundPokemon).assign(data);
    // wrap(foundPokemon).assign(data);: This line uses the wrap function to create an instance of EntityRepository for the foundPokemon.
    // The assign method is then called on this EntityRepository, passing the data from the UpdatePokemonDTO. This operation is where the actual update of the foundPokemon object with the new data takes place. MikroORM takes care of tracking the changes and generating the appropriate SQL queries to update the database.

    await this.pokemonRepository.getEntityManager().flush();
    // After making the updates to the foundPokemon, the flush method is called on the EntityManager of the pokemonRepository. This method synchronizes the changes made to the entity with the database, essentially saving the updated Pokemon.

    return O.fromNullable(foundPokemon);
    //  Finally, the function returns an O.Option wrapping the foundPokemon. If the update was successful, the O.Option will be Some(foundPokemon), otherwise, if the Pokemon was not found, it will be None.
  }

  // delete by id
  async deleteById(id: number): Promise<boolean> {
    const maybeFoundPokemon = await this.findById(id);
    if (O.isNone(maybeFoundPokemon)) {
      return false;
    }
    const foundPokemon = maybeFoundPokemon.value;

    await this.pokemonRepository.nativeDelete(foundPokemon);
    return true;
  }
}
