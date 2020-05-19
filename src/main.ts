import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { CONFIG_FILES } from './config-files';
import * as config from '../ormconfig.js';
import { runMigrations } from './run-migrations';

async function bootstrap() {
  const logger = new Logger('NestApplication');
  await runMigrations(config);
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  const configFiles = CONFIG_FILES.join(', ');

  logger.log(`Using configuration files: [${configFiles}]`);
  logger.log(`Listening on ${port}`);
  await app.listen(port);
}
bootstrap();
