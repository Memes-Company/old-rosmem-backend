import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MemeQueryDto {
  @Field({ nullable: true })
  id?: string;

  @Field(type => [String], { nullable: true })
  tags?: string[];
}
