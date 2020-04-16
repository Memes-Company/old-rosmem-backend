import { Module } from '@nestjs/common';
import { MemesResolver } from './resolvers';
import { PersistenceModule } from 'src/persistence/persistence.module';

@Module({
  providers: [MemesResolver],
  imports: [PersistenceModule],
})
export class PublicApiModule {}
