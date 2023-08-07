"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonService = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const pokemon_entity_1 = require("./entities/pokemon.entity");
const mysql_1 = require("@mikro-orm/mysql");
const nestjs_1 = require("@mikro-orm/nestjs");
const O = require("fp-ts/lib/Option");
const core_1 = require("@mikro-orm/core");
let PokemonService = exports.PokemonService = class PokemonService {
    constructor(pokemonRepository) {
        this.pokemonRepository = pokemonRepository;
    }
    async create(data) {
        console.log('In service layer', data);
        const newPokemon = (0, class_transformer_1.plainToInstance)(pokemon_entity_1.Pokemon, data);
        newPokemon.level = 1;
        console.log('newPokemon: ', newPokemon);
        await this.pokemonRepository.getEntityManager().persistAndFlush(newPokemon);
        return newPokemon;
    }
    async findAll() {
        return await this.pokemonRepository.findAll();
    }
    async findById(id) {
        const result = await this.pokemonRepository.findOne({ id: id });
        return O.fromNullable(result);
    }
    async updateById(id, data) {
        const maybeFoundPokemon = await this.findById(id);
        if (O.isNone(maybeFoundPokemon)) {
            return maybeFoundPokemon;
        }
        const foundPokemon = maybeFoundPokemon.value;
        (0, core_1.wrap)(foundPokemon).assign(data);
        await this.pokemonRepository.getEntityManager().flush();
        return O.fromNullable(foundPokemon);
    }
    async deleteById(id) {
        const maybeFoundPokemon = await this.findById(id);
        if (O.isNone(maybeFoundPokemon)) {
            return false;
        }
        const foundPokemon = maybeFoundPokemon.value;
        await this.pokemonRepository.nativeDelete(foundPokemon);
        return true;
    }
};
exports.PokemonService = PokemonService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_1.InjectRepository)(pokemon_entity_1.Pokemon)),
    __metadata("design:paramtypes", [mysql_1.EntityRepository])
], PokemonService);
//# sourceMappingURL=pokemon.service.js.map