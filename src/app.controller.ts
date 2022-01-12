import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app') // 装饰器
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
