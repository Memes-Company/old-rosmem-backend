import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AuthCredentialsDto {
  @Field()
  login: string;
  @Field()
  password: string;
}
