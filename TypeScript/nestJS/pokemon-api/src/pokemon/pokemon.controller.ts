import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDTO } from './dtos/create-pokemon.dto';
import { Pokemon } from './entities/pokemon.entity';
import * as O from 'fp-ts/lib/Option';
import { UpdatePokemonDTO } from './dtos/update-pokemon.dto';

@Controller('/pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  // POST
  @Post()
  create(@Body() data: CreatePokemonDTO): Promise<Pokemon> {
    return this.pokemonService.create(data);
    // nest will return created data in request body automatically
  }

  // GET
  @Get()
  findAll(): Promise<Pokemon[]> {
    return this.pokemonService.findAll();
  }

  @Get(':id')
  // @Get(':id') maps this method to handle GET requests with a URL parameter 'id'.
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Pokemon> {
    // takes a parameter 'id'.
    // @Param('id', ParseIntPipe) specifies that the 'id' parameter should be extracted from the request's URL and parsed as an integer using the ParseIntPipe.

    console.log(id);
    console.log(typeof id);

    const maybePokemon = await this.pokemonService.findById(id);

    //// 1st method
    // if (O.isNone(maybePokemon)) {
    //   throw new NotFoundException('Could not find Pokemon with id: ' + id);
    // }
    // return maybePokemon.value;

    //// 2nd method
    return O.getOrElseW(() => {
      throw new NotFoundException('Could not find Pokemon with id: ' + id);
    })(maybePokemon);
    // The getOrElseW function is called on maybePokemon Maybe object to either
    // - extract the value if it's a Some or
    // - execute the callback and throw the NotFoundException if it's a None.
  }

  // Update
  @Patch(':id')
  async updateById(
    @Param('id', ParseIntPipe) id: number, // id from request URL parameter
    @Body() data: UpdatePokemonDTO, // data from request URL body
  ): Promise<Pokemon> {
    const maybeUpdatedPokemon = await this.pokemonService.updateById(id, data);

    return O.getOrElseW(() => {
      throw new NotFoundException('Could not find Pokemon with id: ' + id);
    })(maybeUpdatedPokemon);
  }

  // Delete
  @Delete(':id')
  @HttpCode(204) // response 204 code - no content
  async deleteById(@Param('id', ParseIntPipe) id: number): Promise<void> {
    const isDeleted = await this.pokemonService.deleteById(id);

    if (!isDeleted) {
      throw new NotFoundException('Could not find Pokemon with id: ' + id);
    }
  }
}
