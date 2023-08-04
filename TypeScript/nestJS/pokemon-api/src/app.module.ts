import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs/mikro-orm.module';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [MikroOrmModule.forRoot(), PokemonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
