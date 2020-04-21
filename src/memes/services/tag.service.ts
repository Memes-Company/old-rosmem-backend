import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Tag } from '../entities';
import { TagType } from '../types';

@Injectable()
export class TagService {
  constructor(@InjectRepository(Tag) private tagRepository: Repository<Tag>) {}

  async searchTag(query: string): Promise<TagType[]> {
    return this.tagRepository
      .createQueryBuilder()
      .where(`lower(title) like :query`, { query: `%${query.toLowerCase()}%` })
      .getMany();
  }

  async getTagById(id: string): Promise<TagType> {
    const tag = await this.tagRepository.findOne({ id });
    if (!tag) {
      throw new NotFoundException(`Tag with specified id is not found`);
    }
    return tag;
  }
}
