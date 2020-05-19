import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { CONFIG_FILES } from './config-files';
import { MemesModule } from './memes/memes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: CONFIG_FILES,
    }),
    GraphQLModule.forRoot({
      introspection: process.env.ENABLE_GRAPHQL_PLAYGROUND === 'true',
      playground: process.env.ENABLE_GRAPHQL_PLAYGROUND === 'true',
      context: ({ req }) => ({ req }),
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot(),
    AuthModule,
    MemesModule,
  ],
})
export class AppModule {}
