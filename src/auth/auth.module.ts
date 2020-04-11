import { Module } from '@nestjs/common';

import { AuthController } from './controllers';
import { AuthService } from './services';
import { UserRepository } from './repositories';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserRepository],
})
export class AuthModule {}
