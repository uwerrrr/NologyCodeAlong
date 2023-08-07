import { LoadStrategy } from '@mikro-orm/core';
import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';

const config: MikroOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: 'blaSQL2@',
  dbName: 'pokemon_nest_api',
  debug: true,
  entitiesTs: ['src/**/*.entity.ts'],
  entities: ['dist/**/*.entity.js'],
  loadStrategy: LoadStrategy.JOINED,
  migrations: {
    pathTs: 'src/migrations',
    path: 'dist/migrations',
  },
  seeder: {
    pathTs: 'src/seeders',
    path: 'dist/seeders',
  },
};

export default config;
