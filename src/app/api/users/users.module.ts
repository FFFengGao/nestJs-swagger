import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersEntity } from '../../dataBase/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UserModule],
})
export class UserModule { }