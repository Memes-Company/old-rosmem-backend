import { Meme } from 'src/persistence/entities/meme.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Meme)
export class MemeRepository extends Repository<Meme> {}
