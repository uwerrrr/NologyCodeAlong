"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20230807000248 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20230807000248 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table `pokemon` add `level` int not null;');
    }
    async down() {
        this.addSql('alter table `pokemon` drop `level`;');
    }
}
exports.Migration20230807000248 = Migration20230807000248;
//# sourceMappingURL=Migration20230807000248.js.map