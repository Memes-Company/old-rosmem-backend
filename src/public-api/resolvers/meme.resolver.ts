import { Resolver, Query, Args } from '@nestjs/graphql';
import { Meme } from 'src/persistence/entities/meme.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MemeRepository } from 'src/persistence/repositories';

@Resolver(of => Meme)
export class MemeResolver {
  constructor(
    @InjectRepository(MemeRepository) private memesRepository: MemeRepository,
  ) {}

  @Query(of => [Meme])
  async memes(): Promise<Meme[]> {
    // move to MemeService inside Persistence module
    return this.memesRepository.find();
  }

  @Query(of => Meme)
  async meme(@Args('id') id: string): Promise<Meme> {
    // move to MemeService inside Persistence module
    return this.memesRepository.findOne({ id });
  }
}
