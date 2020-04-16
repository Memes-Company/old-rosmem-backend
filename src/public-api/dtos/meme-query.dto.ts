import { InputType, Field } from '@nestjs/graphql';
import { Optional } from '@nestjs/common';

@InputType()
export class MemeQueryDto {
  @Field({ nullable: true })
  id?: string;

  @Field(type => [String], { nullable: true })
  tags?: string[];
}
