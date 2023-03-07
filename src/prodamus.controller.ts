import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { FormDataRequest } from 'nestjs-form-data';
import { ProdamusNotificationService } from './prodamusNotification.service';

@Controller('prodamus')
export class ProdamusHookController {
  constructor(
    private readonly notificationService: ProdamusNotificationService,
  ) {}

  @FormDataRequest()
  @HttpCode(200)
  @Post('payments')
  async paymentsHandler(@Body() body: any) {
    return await this.notificationService.handleNotification(body);
  }

  @FormDataRequest()
  @HttpCode(200)
  @Post('payments2')
  async payments2Handler(@Body() body: any) {
    console.log(body, '2 version');
    return;
  }
}
