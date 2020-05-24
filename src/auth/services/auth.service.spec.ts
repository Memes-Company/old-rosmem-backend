import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UserRepository } from '../repositories';
import { JwtService } from '@nestjs/jwt';
import { AuthCredentialsDto } from '../dtos';

describe('AuthService', () => {
  let authService: AuthService;
  let userRepository: UserRepository;
  const authToken = 'auth-token';
  const authDto: AuthCredentialsDto = {
    login: 'test-login',
    password: 'test-password',
  };

  const mockUserRepositoryFactory = () => ({
    isPasswordValid: jest.fn(() => true),
    signUp: jest.fn(),
  });

  const mockJwtService = () => ({
    signAsync: jest.fn(() => authToken),
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: JwtService, useFactory: mockJwtService },
        {
          provide: UserRepository,
          useFactory: mockUserRepositoryFactory,
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    userRepository = module.get<UserRepository>(UserRepository);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  it('should use repository for sign up', async () => {
    expect(userRepository.signUp).not.toBeCalled();
    await authService.signUp(authDto);
    expect(userRepository.signUp).toBeCalledWith(authDto);
  });

  it('should check password', async () => {
    expect(userRepository.isPasswordValid).not.toBeCalled();
    const token = await authService.signIn(authDto);
    expect(token).toBe(authToken);
    expect(userRepository.isPasswordValid).toBeCalledWith(authDto);
  });
});
