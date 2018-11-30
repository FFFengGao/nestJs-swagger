import { Module } from '@nestjs/common';
import { DogsModule } from './dogs/dogs.module';
import { TestModule } from './index/app.module';
import { UserModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [DogsModule, TestModule, UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1qaz@WSX',
      database: 'nestJs',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  exports: [AppModule],
})
export class AppModule {}
