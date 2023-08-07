import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { UniqueConstraintFilter } from './shared/filters/unique-constraint.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // global validation
  // can add option as obj to ValidationPipe
  app.useGlobalPipes(
    new ValidationPipe({
      enableDebugMessages: true, // print extra warning messages to the console when something is not right.
      whitelist: true, // strip validated (returned) object of any properties that do not use any validation decorators.
    }),
  );

  // global customized exception
  app.useGlobalFilters(new UniqueConstraintFilter());

  await app.listen(3000);
}
bootstrap();
