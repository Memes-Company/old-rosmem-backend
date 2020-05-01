module.exports = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrationsTableName: '__migrations',
  migrations: ['dist/**/migrations/*.js'],
  cli: {
    migrationsDir: 'src/persistence/migrations',
  },
  synchronize: false,
};
