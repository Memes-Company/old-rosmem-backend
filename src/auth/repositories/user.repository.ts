import { EntityRepository, Repository } from 'typeorm';

import { AuthCredentialsDto } from '../dtos';
import { User } from '../entities/user.entity';
import * as ErrorCodes from '@drdgvhbh/postgres-error-codes';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp({ login, password }: AuthCredentialsDto): Promise<void> {
    const user = new User();
    user.login = login;
    user.password = password;
    try {
      await user.save();
    } catch (error) {
      if (error.code === ErrorCodes.PG_UNIQUE_VIOLATION) {
        throw new ConflictException('Login is already taken');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
