import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { AuthCredentialsDto } from '../dtos';
import { User } from '../entities';
import { AuthService } from '../services';
import { ValidationPipe } from '@nestjs/common';

@Resolver(of => User)
export class UserResolver {
  constructor(private authService: AuthService) {}

  @Query(of => String)
  query() {
    return 'Forbidden';
  }

  @Mutation(returns => Boolean)
  async signUp(@Args('data', ValidationPipe) dto: AuthCredentialsDto): Promise<boolean> {
    await this.authService.signUp(dto);
    return true;
  }

  @Mutation(returns => String)
  async signIn(@Args('data', ValidationPipe) dto: AuthCredentialsDto): Promise<string> {
    return this.authService.signIn(dto);
  }
}
