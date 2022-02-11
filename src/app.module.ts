import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginModule } from './login/login.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CommunityModule } from './community/community.module';

@Module({
  imports: [
    LoginModule,
    TypeOrmModule.forRoot(),
    AuthModule,
    UserModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/api*'],
    }),
    CommunityModule,
  ], // 导入模块的列表，如果需要使用其他模块的服务，需要通过这里导入；
  controllers: [AppController], // 处理http请求，包括路由控制，向客户端返回响应，将具体业务逻辑委托给providers处理；
  providers: [AppService], // 服务提供者
})
export class AppModule {}
