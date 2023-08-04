import { Migration } from '@mikro-orm/migrations';

export class Migration20230804010128 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table `pokemon` (`id` int unsigned not null auto_increment primary key, `name` varchar(255) not null, `type` varchar(255) not null, `hp` int not null, `image_link` varchar(255) not null, `evolution_id` int null, `level` int not null) default character set utf8mb4 engine = InnoDB;',
    );
    this.addSql(
      'alter table `pokemon` add unique `pokemon_name_unique`(`name`);',
    );
  }
}
