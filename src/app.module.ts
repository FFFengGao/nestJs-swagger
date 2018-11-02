import { Module } from '@nestjs/common';
import { DogsModule } from './module/dogs.module';
import { TestModule } from './module/app.module';

@Module({
  imports: [DogsModule, TestModule],
  exports: [AppModule],
})
export class AppModule {}
