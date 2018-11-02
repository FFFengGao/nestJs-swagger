import { Module } from '@nestjs/common';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';

@Module({
  controllers: [AppController],
  providers: [AppService],
  exports: [TestModule],
})
export class TestModule { }