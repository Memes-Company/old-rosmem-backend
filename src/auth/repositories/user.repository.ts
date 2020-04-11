import * as ErrorCodes from '@drdgvhbh/postgres-error-codes';
import {
  ConflictException,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { EntityRepository, Repository } from 'typeorm';

import { AuthCredentialsDto } from '../dtos';
import { User } from '../entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp({ login, password }: AuthCredentialsDto): Promise<void> {
    const user = new User();

    user.login = login;
    user.salt = await bcrypt.genSalt();
    user.password = await this.hashPassword(password, user.salt);

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

  async validateUserPassword({
    login,
    password,
  }: AuthCredentialsDto): Promise<boolean> {
    const user = await this.findOne({ login });

    if (!user) {
      throw new UnauthorizedException(`Invalid credentials`);
    }

    const hash = await this.hashPassword(password, user.salt);
    return user.password === hash;
  }

  private async hashPassword(password: string, salt: string): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}
