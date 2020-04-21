import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';

import { TagType } from './tag.type';
import { MemeSourceType } from '../entities';

registerEnumType(MemeSourceType, {
  name: 'MemeSourceType',
});

@ObjectType('Meme')
export class MemeType {
  @Field({ description: 'Unique id of meme' })
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field(type => MemeSourceType)
  sourceType: MemeSourceType;

  @Field()
  sourceValue: string;

  @Field(type => [TagType])
  tags: TagType[];
}
