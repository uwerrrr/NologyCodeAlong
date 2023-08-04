"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20230804010128 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20230804010128 extends migrations_1.Migration {
    async up() {
        this.addSql('create table `pokemon` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `type` varchar(255) not null, `hp` int not null, `image_link` varchar(255) not null, `evolution_id` int null, `level` int not null) default character set utf8mb4 engine = InnoDB;');
        this.addSql('alter table `pokemon` add unique `pokemon_name_unique`(`name`);');
    }
}
exports.Migration20230804010128 = Migration20230804010128;
//# sourceMappingURL=Migration20230804010128.js.map