import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/nest')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/:name/welcome')
  getWelcome(@Param('name') name: string) {
    return this.appService.getWelcome(name);
  }

  @Get('/hi')
  getHi(@Query('name') name: string) {
    return this.appService.getHi(name);
  }
}
