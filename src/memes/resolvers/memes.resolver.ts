import { Inject } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { Meme } from '../entities';
import { MemeService } from '../services/meme.service';

@Resolver(of => Meme)
export class MemeResolver {
  constructor(@Inject(MemeService) private memeService: MemeService) {}

  @Query(of => Meme)
  async meme(@Args('id') id: string): Promise<Meme> {
    return this.memeService.getMemeById(id);
  }

  @Query(of => [Meme], { name: 'memes_with_tags' })
  async memesWithTags(
    @Args('tags', { type: () => [String] }) tags: string[],
  ): Promise<Meme[]> {
    return this.memeService.getMemesWithTags(tags);
  }
}
