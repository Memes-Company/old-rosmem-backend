import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { JwtStrategy } from './jwt/jwt-strategy';
import { UserRepository } from './repositories';
import { UserResolver } from './resolvers';
import { AuthService } from './services';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'temporarySecret',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    TypeOrmModule.forFeature([UserRepository]),
  ],
  controllers: [],
  providers: [AuthService, JwtStrategy, UserResolver],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
