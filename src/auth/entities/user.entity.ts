import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@Entity()
@Unique(['login'])
@ObjectType()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Field()
  login: string;

  @Column()
  password: string;
}
