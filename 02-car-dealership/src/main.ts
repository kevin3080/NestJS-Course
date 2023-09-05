import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(//asi importas los pipes a nivel global
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )


  await app.listen(3000);
}
bootstrap();
