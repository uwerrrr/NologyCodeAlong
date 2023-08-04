// Handle entity injection

import { Module } from "@nestjs/common";
import { PokemonController } from "./pokemon.controller";
import { AppService } from "src/app.service";
import { MikroOrmModule } from "@mikro-orm/nestjs";

@Module({
  imports:[MikroOrmModule.forRoot(), PokemonModule ],
  controllers: [PokemonController],
  providers:[AppService],
})
export class PokemonModule