import { Module } from '@nestjs/common';
import { DogsController } from '../controller/dogs.controller';
import { DogsService } from '../service/dogs.service';

@Module({
  controllers: [DogsController],
  providers: [DogsService],
  exports: [DogsModule],
})
export class DogsModule { }