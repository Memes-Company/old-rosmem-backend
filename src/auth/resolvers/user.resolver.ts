import { UseGuards, ValidationPipe } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { AuthCredentialsDto } from '../dtos';
import { User } from '../entities';
import { CurrentUser, GqlAuthGuard } from '../jwt/gql-auth.guard';
import { AuthService } from '../services';

@Resolver(of => User)
export class UserResolver {
  constructor(private authService: AuthService) {}

  @Query(of => String)
  query() {
    return 'Forbidden';
  }

  @Mutation(returns => Boolean)
  async signUp(
    @Args('data', ValidationPipe) dto: AuthCredentialsDto,
  ): Promise<boolean> {
    await this.authService.signUp(dto);
    return true;
  }

  @Mutation(returns => String)
  async signIn(
    @Args('data', ValidationPipe) dto: AuthCredentialsDto,
  ): Promise<string> {
    return this.authService.signIn(dto);
  }

  @Mutation(returns => User)
  @UseGuards(GqlAuthGuard)
  async getUser(@CurrentUser() user: User): Promise<User> {
    return user;
  }
}
