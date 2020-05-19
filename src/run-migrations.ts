import { createConnection, ConnectionOptions } from 'typeorm';
import { Logger } from '@nestjs/common';
export const runMigrations = async (config: ConnectionOptions) => {
  const logger = new Logger('TypeORM');
  logger.log(`Running migrations...`);
  const connection = await createConnection(config);
  const { length: appliedMigrationsCount } = await connection.runMigrations({
    transaction: 'all',
  });
  logger.log(`Applied migrations: ${appliedMigrationsCount}`);
  await connection.close();
};
