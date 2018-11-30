import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
  ) { }

  async findAll(){
    const Result = await this.userRepository.find();
    return {
      code: 1,
      msg: '请求成功!',
      data: [Result],
    };
  }

  async create(user) {
    user.loginTime = new Date();
    const User = this.userRepository.create(user);
    const Result = await this.userRepository.save(User);
    return {
      code: 1,
      msg: '请求成功!',
      data: [Result],
    };
  }
}
