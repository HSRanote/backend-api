import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmConfigModule, typeOrmConfig } from '../shared-orm-library/typeorm.config';

@Module({
  imports: [TypeOrmConfigModule, UserService],
  controllers: [AppController, UserController],
  providers: [],
})
export class AppModule {}
