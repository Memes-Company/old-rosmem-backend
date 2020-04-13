import { Module } from '@nestjs/common';
import { MemeResolver } from './resolvers';
import { MemeRepository } from './repositories';

@Module({
  providers: [MemeResolver, MemeRepository],
})
export class PublicApiModule {}
