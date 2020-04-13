import { Test, TestingModule } from '@nestjs/testing';
import { MemeResolver } from './meme.resolver';

describe('MemeResolver', () => {
  let resolver: MemeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemeResolver],
    }).compile();

    resolver = module.get<MemeResolver>(MemeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
