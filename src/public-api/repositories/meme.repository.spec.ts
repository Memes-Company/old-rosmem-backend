import { Test, TestingModule } from '@nestjs/testing';
import { MemeRepository } from './meme.repository';

describe('MemeRepository', () => {
  let provider: MemeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemeRepository],
    }).compile();

    provider = module.get<MemeRepository>(MemeRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
