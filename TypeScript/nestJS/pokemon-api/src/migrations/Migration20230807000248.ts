import { Migration } from '@mikro-orm/migrations';

export class Migration20230807000248 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table `pokemon` add `level` int not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table `pokemon` drop `level`;');
  }

}
