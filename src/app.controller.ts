import { Controller, Get, Render, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @HttpCode(200)
  @Render('index')
  getHello() {
    return {docTitle: "Entery point", heading: "This is a rendered page"}
  }
}
