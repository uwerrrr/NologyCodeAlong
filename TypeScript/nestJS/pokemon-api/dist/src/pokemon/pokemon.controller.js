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
exports.PokemonController = void 0;
const common_1 = require("@nestjs/common");
const pokemon_service_1 = require("./pokemon.service");
const create_pokemon_dto_1 = require("./dtos/create-pokemon.dto");
const O = require("fp-ts/lib/Option");
const update_pokemon_dto_1 = require("./dtos/update-pokemon.dto");
let PokemonController = exports.PokemonController = class PokemonController {
    constructor(pokemonService) {
        this.pokemonService = pokemonService;
    }
    create(data) {
        return this.pokemonService.create(data);
    }
    findAll() {
        return this.pokemonService.findAll();
    }
    async findById(id) {
        console.log(id);
        console.log(typeof id);
        const maybePokemon = await this.pokemonService.findById(id);
        return O.getOrElseW(() => {
            throw new common_1.NotFoundException('Could not find Pokemon with id: ' + id);
        })(maybePokemon);
    }
    async updateById(id, data) {
        const maybeUpdatedPokemon = await this.pokemonService.updateById(id, data);
        return O.getOrElseW(() => {
            throw new common_1.NotFoundException('Could not find Pokemon with id: ' + id);
        })(maybeUpdatedPokemon);
    }
    async deleteById(id) {
        const isDeleted = await this.pokemonService.deleteById(id);
        if (!isDeleted) {
            throw new common_1.NotFoundException('Could not find Pokemon with id: ' + id);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pokemon_dto_1.CreatePokemonDTO]),
    __metadata("design:returntype", Promise)
], PokemonController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PokemonController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PokemonController.prototype, "findById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_pokemon_dto_1.UpdatePokemonDTO]),
    __metadata("design:returntype", Promise)
], PokemonController.prototype, "updateById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(204),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PokemonController.prototype, "deleteById", null);
exports.PokemonController = PokemonController = __decorate([
    (0, common_1.Controller)('/pokemon'),
    __metadata("design:paramtypes", [pokemon_service_1.PokemonService])
], PokemonController);
//# sourceMappingURL=pokemon.controller.js.map