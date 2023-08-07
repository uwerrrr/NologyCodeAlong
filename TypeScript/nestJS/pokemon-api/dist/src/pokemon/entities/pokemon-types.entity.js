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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonTypes = void 0;
const core_1 = require("@mikro-orm/core");
const pokemon_entity_1 = require("./pokemon.entity");
let PokemonTypes = exports.PokemonTypes = class PokemonTypes {
    constructor() {
        this.pokemon = new core_1.Collection(this);
    }
};
__decorate([
    (0, core_1.PrimaryKey)(),
    __metadata("design:type", Number)
], PokemonTypes.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)(),
    __metadata("design:type", String)
], PokemonTypes.prototype, "name", void 0);
__decorate([
    (0, core_1.ManyToMany)(() => pokemon_entity_1.Pokemon, (pokemon) => pokemon.types, { owner: true }),
    __metadata("design:type", Object)
], PokemonTypes.prototype, "pokemon", void 0);
exports.PokemonTypes = PokemonTypes = __decorate([
    (0, core_1.Entity)()
], PokemonTypes);
//# sourceMappingURL=pokemon-types.entity.js.map