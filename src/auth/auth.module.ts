import { Module } from '@nestjs/common';

import { AuthController } from './controllers';
import { AuthService } from './services';
import { UserRepository } from './repositories';
import { UserResolver } from './resolvers';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  controllers: [AuthController],
  providers: [AuthService, UserResolver],
})
export class AuthModule {}
