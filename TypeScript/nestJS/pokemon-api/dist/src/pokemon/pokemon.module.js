"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PokemonModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonModule = void 0;
const common_1 = require("@nestjs/common");
const pokemon_controller_1 = require("./pokemon.controller");
const app_service_1 = require("../app.service");
const nestjs_1 = require("@mikro-orm/nestjs");
let PokemonModule = exports.PokemonModule = PokemonModule_1 = class PokemonModule {
};
exports.PokemonModule = PokemonModule = PokemonModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [nestjs_1.MikroOrmModule.forRoot(), PokemonModule_1],
        controllers: [pokemon_controller_1.PokemonController],
        providers: [app_service_1.AppService],
    })
], PokemonModule);
//# sourceMappingURL=pokemon.module.js.map