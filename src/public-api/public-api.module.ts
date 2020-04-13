import { Module } from '@nestjs/common';
import { MemeResolver } from './resolvers';
import { PersistenceModule } from 'src/persistence/persistence.module';

@Module({
  providers: [MemeResolver],
  imports: [PersistenceModule],
})
export class PublicApiModule {}
