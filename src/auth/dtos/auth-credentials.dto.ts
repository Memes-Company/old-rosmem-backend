import { Field, InputType } from '@nestjs/graphql';
import { IsString, MinLength, MaxLength, Matches } from 'class-validator';
@InputType()
export class AuthCredentialsDto {
  @Field()
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  login: string;

  @Field()
  @Field()
  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Password is too weak',
  })
  password: string;
}
