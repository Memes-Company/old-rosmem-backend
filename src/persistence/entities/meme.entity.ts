import {
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  BaseEntity,
} from 'typeorm';

import { Tag } from './tag.entity';

export enum MemeSourceType {
  link = 'link',
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

  @ManyToMany(type => Tag)
  tags: Tag[];
}
