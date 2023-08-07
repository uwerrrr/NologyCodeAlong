// Handle entity injection

import { Module } from '@nestjs/common';
import { PokemonController } from './pokemon.controller';
import { PokemonService } from './pokemon.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Pokemon } from './entities/pokemon.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Pokemon])], // repository
  controllers: [PokemonController], // controller
  providers: [PokemonService], // service
})
export class PokemonModule {}
