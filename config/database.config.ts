import { registerAs } from '@nestjs/config';
import { join } from 'path';

export default registerAs('databaseConfig', () => {
  const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

  return {
    type: 'postgres',
    host: DB_HOST,
    port: +DB_PORT,
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    entities: ['src/entities/**/*{.ts,.js}'],
    synchronize: false,
    migrationsRun: true,
    logging: true,
    migrations: ['src/migrations/**/*{.ts,.js}'],
    cli: {
      migrationsDir: 'src/migrations',
    },
  };
});
