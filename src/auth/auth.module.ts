import { DynamicModule, Module } from '@nestjs/common';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from './jwt/jwt-strategy';
import { UserRepository } from './repositories';
import { UserResolver } from './resolvers';
import { AuthService } from './services';

@Module({})
export class AuthModule {
  static forRoot(jwtOptions: JwtModuleOptions): DynamicModule {
    return {
      module: AuthModule,
      imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register(jwtOptions),
        TypeOrmModule.forFeature([UserRepository]),
      ],
      controllers: [],
      providers: [AuthService, JwtStrategy, UserResolver],
      exports: [JwtStrategy, PassportModule],
    };
  }
}
