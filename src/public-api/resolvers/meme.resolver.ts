import { Resolver, Query } from '@nestjs/graphql';
import { Meme } from 'src/persistence/entities/meme.entity';

@Resolver(of => Meme)
export class MemeResolver {
  @Query(of => Meme)
  memes() {
    return [];
  }
}
