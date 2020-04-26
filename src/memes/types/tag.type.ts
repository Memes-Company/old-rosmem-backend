import { Field, ObjectType } from '@nestjs/graphql';

import { MemeType } from './meme.type';

@ObjectType('Tag', { description: 'Represents tag for meme' })
export class TagType {
  @Field({ description: 'The unique id of tag' })
  id: string;

  @Field({ description: 'This is the literally tag' })
  title: string;

  @Field(type => [MemeType], {
    description: 'List of Memes which are contain this tag',
  })
  memes: MemeType[];
}
