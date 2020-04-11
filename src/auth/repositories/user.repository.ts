import { EntityRepository, Repository } from 'typeorm';

import { AuthCredentialsDto } from '../dtos';
import { User } from '../entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async signUp({ login, password }: AuthCredentialsDto): Promise<void> {
    const user = new User();
    user.login = login;
    user.password = password;
    await user.save();
  }
}
