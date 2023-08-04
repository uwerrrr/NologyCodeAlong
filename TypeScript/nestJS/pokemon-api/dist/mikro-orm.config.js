"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const config = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'blaSQL2@',
    dbName: 'pokemon_nest_api',
    debug: true,
    entitiesTs: ['src/**/*.entity.ts'],
    entities: ['dist/**/*.entity.js'],
    loadStrategy: core_1.LoadStrategy.JOINED,
    migrations: {
        pathTs: 'src/migrations',
        path: 'dist/migrations',
    },
};
exports.default = config;
//# sourceMappingURL=mikro-orm.config.js.map