import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MemeRepository } from './repositories';
import { MemesResolver } from './resolvers';

@Module({
  imports: [TypeOrmModule.forFeature([MemeRepository])],
  providers: [MemesResolver],
})
export class MemesModule {}
