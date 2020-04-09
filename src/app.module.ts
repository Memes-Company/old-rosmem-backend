import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersistenceModule } from './persistence/persistence.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PersistenceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
