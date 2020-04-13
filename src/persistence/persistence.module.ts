import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemeRepository } from './repositories';

@Module({
  imports: [TypeOrmModule.forFeature([MemeRepository])],
  exports: [TypeOrmModule],
})
export class PersistenceModule {}
