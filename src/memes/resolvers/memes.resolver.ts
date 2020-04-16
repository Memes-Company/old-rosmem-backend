import { NotImplementedException } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';

import { MemeQueryDto } from '../dtos';
import { Meme } from '../entities';
import { MemeRepository } from '../repositories';

@Resolver(of => Meme)
export class MemesResolver {
  constructor(
    @InjectRepository(MemeRepository) private memesRepository: MemeRepository,
  ) {}

  @Query(of => [Meme])
  async memes(): Promise<Meme[]> {
    // move to MemeService inside Persistence module
    return this.memesRepository.find();
  }

  @Query(of => Meme)
  async meme(@Args('data') { id, tags }: MemeQueryDto): Promise<Meme> {
    // move to MemeService inside Persistence module
    if (id) {
      return this.memesRepository.findOne({ id });
    }
    if (tags) {
      throw new NotImplementedException('Not implemented');
    }
  }
}
