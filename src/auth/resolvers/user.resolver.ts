import { UseGuards, ValidationPipe } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { AuthCredentialsDto } from '../dtos';
import { User } from '../entities';
import { CurrentUser, GqlAuthGuard } from '../jwt/gql-auth.guard';
import { AuthService } from '../services';

@Resolver(of => User)
export class UserResolver {
  constructor(private authService: AuthService) {}

  @Mutation(returns => Boolean, {
    description: 'Creates new user with given credentials',
  })
  async signUp(
    @Args('data', ValidationPipe) dto: AuthCredentialsDto,
  ): Promise<boolean> {
    await this.authService.signUp(dto);
    return true;
  }

  @Mutation(returns => String, {
    description:
      'Authorizes existing user and returns token for futher API requests',
  })
  async signIn(
    @Args('data', ValidationPipe) dto: AuthCredentialsDto,
  ): Promise<string> {
    return this.authService.signIn(dto);
  }

  @Mutation(returns => User, {
    description: 'Test method to validate authorization',
  })
  @UseGuards(GqlAuthGuard)
  async getUser(@CurrentUser() user: User): Promise<User> {
    return user;
  }
}
