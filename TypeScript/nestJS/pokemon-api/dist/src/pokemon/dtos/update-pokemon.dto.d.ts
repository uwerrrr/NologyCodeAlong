import { CreatePokemonDTO } from './create-pokemon.dto';
declare const UpdatePokemonDTO_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePokemonDTO>>;
export declare class UpdatePokemonDTO extends UpdatePokemonDTO_base {
    level: number;
}
export {};
