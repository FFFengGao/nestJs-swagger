import { Get, Controller, Post, Res, Body, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiModelProperty } from '@nestjs/swagger';

export class UsersBody {
  @ApiModelProperty()
  readonly name: string;

  @ApiModelProperty()
  readonly address: string;
}

@Controller('user')
export class UsersController {
  constructor(
    private readonly appService: UsersService,
  ) { }

  @Get()
  findAll() {
    return this.appService.findAll();
  }

  @Post()
  create(
    @Body()
    user: UsersBody,
  ) {
    return this.appService.create(user);
  }
}
