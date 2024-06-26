import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../services/user.service';
import { connectDatabase } from 'shared-orm-library/dist/config/database.config';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {
  constructor() {
    connectDatabase();
  }
}
