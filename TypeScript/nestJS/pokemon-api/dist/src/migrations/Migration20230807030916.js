"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20230807030916 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20230807030916 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table `pokemon_types` drop `type_color`;');
    }
    async down() {
        this.addSql('alter table `pokemon_types` add `type_color` varchar(255) not null;');
    }
}
exports.Migration20230807030916 = Migration20230807030916;
//# sourceMappingURL=Migration20230807030916.js.map