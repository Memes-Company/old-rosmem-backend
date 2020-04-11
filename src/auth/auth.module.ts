import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserRepository } from './repositories';
import { UserResolver } from './resolvers';
import { AuthService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  controllers: [],
  providers: [AuthService, UserResolver],
})
export class AuthModule {}
