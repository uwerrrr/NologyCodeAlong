"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20230804011652 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20230804011652 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table `pokemon` drop `level`;');
    }
    async down() {
        this.addSql('alter table `pokemon` add `level` int not null;');
    }
}
exports.Migration20230804011652 = Migration20230804011652;
//# sourceMappingURL=Migration20230804011652.js.map