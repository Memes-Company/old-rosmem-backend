import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MemeRepository } from './repositories';
import { MemeResolver } from './resolvers';
import { MemeService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([MemeRepository])],
  providers: [MemeResolver, MemeService],
})
export class MemesModule {}
