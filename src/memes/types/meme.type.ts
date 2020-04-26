import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

import { TagType } from './tag.type';
import { MemeSourceType } from '../entities';

registerEnumType(MemeSourceType, {
  name: 'MemeSourceType',
});

@ObjectType('Meme', { description: 'The meme.' })
export class MemeType {
  @Field({ description: 'The unique id of meme' })
  id: string;

  @Field({ description: 'Short name' })
  title: string;

  @Field({ description: 'Brief info about meme' })
  description: string;

  @Field(type => MemeSourceType, {
    description:
      "The type of meme's media source. Can be used to determine how to show media (e.g. like link, photo or video)",
  })
  sourceType: MemeSourceType;

  @Field({ description: 'The link to media: photo, video, wiki etc.' })
  sourceValue: string;

  @Field(type => [TagType], {
    description: 'List of Tags which are related to the Meme',
  })
  tags: TagType[];
}
