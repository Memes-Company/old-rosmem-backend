import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';

import { Meme } from '../entities';
import { MemeQueryDto } from '../dtos';
import { MemeType } from '../types';

@Injectable()
export class MemeService {
  constructor(
    @InjectRepository(Meme) private memeRepository: Repository<Meme>,
  ) {}

  async getMemeById(id: string): Promise<MemeType> {
    const meme = await this.memeRepository.findOne({ id });
    if (!meme) {
      throw new NotFoundException(`Meme with specified id is not found`);
    }
    return meme;
  }
  async getMemesWithTags(tags: string[]): Promise<MemeType[]> {
    return this.memeRepository
      .createQueryBuilder('meme')
      .addSelect('count("tagId")')
      .addSelect('json_agg("tagId")', 'tags')
      .innerJoinAndSelect('meme.tags', 'tag', 'tag.id in (:...tags)', { tags })
      .groupBy('meme.id, tag.id')
      .having('count("tagId") > 0')
      .orderBy('count("tagId")', 'DESC')
      .getMany();
  }
}
