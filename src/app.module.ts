import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { join } from 'path';
import { MemesModule } from './memes/memes.module';

@Module({
  imports: [
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
