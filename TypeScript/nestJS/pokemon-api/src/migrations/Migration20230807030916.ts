import { Migration } from '@mikro-orm/migrations';

export class Migration20230807030916 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `pokemon_types` drop `type_color`;');
  }

  async down(): Promise<void> {
    this.addSql('alter table `pokemon_types` add `type_color` varchar(255) not null;');
  }

}
