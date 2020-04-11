import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { AuthCredentialsDto } from '../dtos';
import { UserRepository } from '../repositories/user.repository';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../types';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(UserRepository) private userRepository: UserRepository, private jwtService: JwtService) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.userRepository.signUp(authCredentialsDto);
  }

  async signIn(authCredentialsDto: AuthCredentialsDto): Promise<string> {
    const isPasswordValid = await this.userRepository.isPasswordValid(authCredentialsDto);
    if (!isPasswordValid) {
      throw new UnauthorizedException(`Invalid credentials`);
    }

    const payload: JwtPayload = { login: authCredentialsDto.login };
    const accessToken = await this.jwtService.signAsync(payload);
    return accessToken;
  }
}
