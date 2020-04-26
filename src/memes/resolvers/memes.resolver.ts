import { Inject } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { MemeService } from '../services/meme.service';
import { MemeType } from '../types';

@Resolver(of => MemeType)
export class MemeResolver {
  constructor(@Inject(MemeService) private memeService: MemeService) {}

  @Query(of => MemeType, {
    description: 'Returns Meme with given ID. Otherwise returns 404',
  })
  async meme(@Args('id') id: string): Promise<MemeType> {
    return this.memeService.getMemeById(id);
  }

  @Query(of => [MemeType], {
    name: 'memes_with_tags',
    description:
      'Receives the list of valid Tag IDs and returns memes which have relation with some of that Tags',
  })
  async memesWithTags(
    @Args('tags', { type: () => [String] }) tags: string[],
  ): Promise<MemeType[]> {
    return this.memeService.getMemesWithTags(tags);
  }
}
