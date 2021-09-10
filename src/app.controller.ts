import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): object {
    return this.appService.getHello();
  }

  @Get('/profile')
  getProfile(): object {
    return [
      { name: 'Shashank', age: 20 },
      { name: 'Vishal', age: '24' },
    ];
  }
}
