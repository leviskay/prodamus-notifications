import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { FormDataRequest } from 'nestjs-form-data';
import { ProdamusNotificationService } from '../src/module/prodamusNotification.service';

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
}
