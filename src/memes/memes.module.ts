import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Meme, Tag } from './entities';
import { MemeResolver, TagsResolver } from './resolvers';
import { MemeService, TagService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Meme, Tag])],
  providers: [MemeResolver, MemeService, TagsResolver, TagService],
})
export class MemesModule {}
