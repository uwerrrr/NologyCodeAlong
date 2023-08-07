"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonTypesSeeder = void 0;
const seeder_1 = require("@mikro-orm/seeder");
const pokemon_types_entity_1 = require("../pokemon/entities/pokemon-types.entity");
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
class PokemonTypesSeeder extends seeder_1.Seeder {
    async run(em) {
        pokemonTypes.forEach((type) => em.create(pokemon_types_entity_1.PokemonTypes, { name: type }));
    }
}
exports.PokemonTypesSeeder = PokemonTypesSeeder;
//# sourceMappingURL=PokemonTypesSeeder.js.map