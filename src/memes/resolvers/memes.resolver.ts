import { Inject } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { MemeService } from '../services/meme.service';
import { MemeType } from '../types';

@Resolver(of => MemeType)
export class MemeResolver {
  constructor(@Inject(MemeService) private memeService: MemeService) {}

  @Query(of => MemeType)
  async meme(@Args('id') id: string): Promise<MemeType> {
    return this.memeService.getMemeById(id);
  }

  @Query(of => [MemeType], { name: 'memes_with_tags' })
  async memesWithTags(
    @Args('tags', { type: () => [String] }) tags: string[],
  ): Promise<MemeType[]> {
    return this.memeService.getMemesWithTags(tags);
  }
}
