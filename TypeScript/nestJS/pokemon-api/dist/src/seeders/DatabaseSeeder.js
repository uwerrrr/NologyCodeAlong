"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseSeeder = void 0;
const seeder_1 = require("@mikro-orm/seeder");
const PokemonTypesSeeder_1 = require("./PokemonTypesSeeder");
class DatabaseSeeder extends seeder_1.Seeder {
    async run(em) {
        return this.call(em, [PokemonTypesSeeder_1.PokemonTypesSeeder]);
    }
}
exports.DatabaseSeeder = DatabaseSeeder;
//# sourceMappingURL=DatabaseSeeder.js.map