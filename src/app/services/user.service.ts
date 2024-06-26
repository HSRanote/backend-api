import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { User } from 'shared-orm-library/dist/entities/user.entity';

@Injectable()
export class UserService {
  async findAll(): Promise<User[]> {
    const userRepository = getRepository(User);
    return userRepository.find();
  }
}
