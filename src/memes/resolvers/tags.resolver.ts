import { Inject } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';

import { Tag } from '../entities';
import { TagService } from '../services';

@Resolver(of => Tag)
export class TagsResolver {
  constructor(@Inject(TagService) private tagService: TagService) {}

  @Query(of => Tag)
  async tag(@Args('id') id: string): Promise<Tag> {
    return this.tagService.getTagById(id);
  }

  @Query(of => [Tag])
  //todo: add min length
  async search_tags(@Args('query') query: string): Promise<Tag[]> {
    return this.tagService.searchTag(query);
  }
}
