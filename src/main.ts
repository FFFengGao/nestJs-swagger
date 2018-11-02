import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  // 注册依赖
  const app = await NestFactory.create(AppModule);

  // 申明静态文件，MVC模式
  app.useStaticAssets(__dirname + '/public');
  app.setBaseViewsDir(__dirname + '/views');
  app.setViewEngine('hbs');

  // openAPI（swagger）配置
  const options = new DocumentBuilder()
    .setTitle('高峰的测试项目')
    .setDescription('ts + swagger 测试项目')
    .setVersion('1.0')
    .addTag('test')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();