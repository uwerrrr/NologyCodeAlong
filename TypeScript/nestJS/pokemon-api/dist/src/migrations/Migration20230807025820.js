"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20230807025820 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20230807025820 extends migrations_1.Migration {
    async up() {
        this.addSql('create table `pokemon_type` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `type_color` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');
        this.addSql('create table `pokemon_type_pokemon` (`pokemon_type_id` int unsigned not null, `pokemon_id` int unsigned not null, primary key (`pokemon_type_id`, `pokemon_id`)) default character set utf8mb4 engine = InnoDB;');
        this.addSql('alter table `pokemon_type_pokemon` add index `pokemon_type_pokemon_pokemon_type_id_index`(`pokemon_type_id`);');
        this.addSql('alter table `pokemon_type_pokemon` add index `pokemon_type_pokemon_pokemon_id_index`(`pokemon_id`);');
        this.addSql('alter table `pokemon_type_pokemon` add constraint `pokemon_type_pokemon_pokemon_type_id_foreign` foreign key (`pokemon_type_id`) references `pokemon_type` (`id`) on update cascade on delete cascade;');
        this.addSql('alter table `pokemon_type_pokemon` add constraint `pokemon_type_pokemon_pokemon_id_foreign` foreign key (`pokemon_id`) references `pokemon` (`id`) on update cascade on delete cascade;');
        this.addSql('alter table `pokemon` drop `type`;');
    }
    async down() {
        this.addSql('alter table `pokemon_type_pokemon` drop foreign key `pokemon_type_pokemon_pokemon_type_id_foreign`;');
        this.addSql('drop table if exists `pokemon_type`;');
        this.addSql('drop table if exists `pokemon_type_pokemon`;');
        this.addSql('alter table `pokemon` add `type` varchar(255) not null;');
    }
}
exports.Migration20230807025820 = Migration20230807025820;
//# sourceMappingURL=Migration20230807025820.js.map