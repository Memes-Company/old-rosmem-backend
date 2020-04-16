import { EntityRepository, Repository } from 'typeorm';
import { Meme } from '../entities/meme.entity';

@EntityRepository(Meme)
export class MemeRepository extends Repository<Meme> {}
