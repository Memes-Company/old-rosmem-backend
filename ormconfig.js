module.exports = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username:"postgres",
  password:"",
  database:"memes",
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrationsTableName: '__migrations',
  migrations: ['dist/**/migrations/*.js'],
  cli: {
    migrationsDir: 'src/persistence/migrations',
  },
  synchronize: false,
};
