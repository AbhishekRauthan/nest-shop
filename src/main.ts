import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module';
import { join } from 'path';
import { NotFound } from './404Exception';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  //  SETTING UP THE TEMPLATING ENGINE
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  app.useGlobalFilters(new NotFound());

  await app.listen(3000);
}
bootstrap();
