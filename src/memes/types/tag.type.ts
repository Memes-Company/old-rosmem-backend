import { Field, ObjectType } from '@nestjs/graphql';

import { MemeType } from './meme.type';

@ObjectType('Tag')
export class TagType {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field(type => [MemeType])
  memes: MemeType[];
}
