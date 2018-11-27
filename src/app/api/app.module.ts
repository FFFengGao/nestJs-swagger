import { Module } from '@nestjs/common';
import { DogsModule } from './dogs/dogs.module';
import { TestModule } from './index/app.module';

@Module({
  imports: [DogsModule, TestModule],
  exports: [AppModule],
})
export class AppModule {}
