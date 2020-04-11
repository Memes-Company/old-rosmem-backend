import { Body, Controller, Post } from '@nestjs/common';

import { AuthCredentialsDto } from '../dtos';
import { AuthService } from '../services';

//TODO: now its just REST api, but we need to make it GraphQL
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signup')
  async signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(authCredentialsDto);
  }
}
