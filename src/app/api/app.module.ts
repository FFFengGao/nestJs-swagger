import { Module } from '@nestjs/common';
import { DogsModule } from './dogs/dogs.module';
import { TestModule } from './index/app.module';
import { UserModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forRoot(), DogsModule, TestModule, UserModule],
  exports: [AppModule],
})
export class AppModule {}
