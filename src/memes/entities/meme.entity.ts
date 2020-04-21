import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Tag } from './tag.entity';

export enum MemeSourceType {
  link = 'link',
  image = 'image',
}

@Entity()
export class Meme extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'enum', enum: MemeSourceType })
  sourceType: MemeSourceType;

  @Column()
  sourceValue: string;

  @ManyToMany(
    type => Tag,
    tag => tag.memes,
    { eager: true },
  )
  tags: Tag[];
}
