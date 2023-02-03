import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [ConfigModule.forRoot({ cache: true, isGlobal: true }), TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
