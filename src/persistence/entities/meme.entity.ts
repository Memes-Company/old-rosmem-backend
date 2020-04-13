import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  BaseEntity,
} from 'typeorm';

import { Tag } from './tag.entity';
import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
export enum MemeSourceType {
  link = 'link',
  image = 'image',
}

registerEnumType(MemeSourceType, {
  name: 'MemeSourceType',
});

@ObjectType()
@Entity()
export class Meme extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  @Field({ description: 'Unique id of meme' })
  id: string;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  description: string;

  @Column({ type: 'enum', enum: MemeSourceType })
  @Field(type => MemeSourceType)
  sourceType: MemeSourceType;

  @Column()
  @Field()
  sourceValue: string;

  @ManyToMany(
    type => Tag,
    tag => tag.memes,
    { eager: true },
  )
  @Field(type => [Tag])
  tags: Tag[];
}
