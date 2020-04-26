import { Inject } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { TagService } from '../services';
import { TagType } from '../types';

@Resolver(of => TagType)
export class TagsResolver {
  constructor(@Inject(TagService) private tagService: TagService) {}

  @Query(of => TagType, {
    description: 'Returns Tag with given ID. Otherwise returns 404',
  })
  async tag(@Args('id') id: string): Promise<TagType> {
    return this.tagService.getTagById(id);
  }

  @Query(of => [TagType], {
    description:
      'Returns all tags which titles case-insensitive contain given substring',
  })
  //todo: add min length
  async search_tags(@Args('query') query: string): Promise<TagType[]> {
    return this.tagService.searchTag(query);
  }
}
