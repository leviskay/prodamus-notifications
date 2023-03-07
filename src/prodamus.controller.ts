import { Body, Controller, Post } from '@nestjs/common';
import { ProdamusNotificationService } from './prodamusNotification.service';

@Controller('prodamus')
export class ProdamusHookController {
  constructor(
    private readonly notificationService: ProdamusNotificationService,
  ) {}
 @Post('payments')
  async paymentsHandler(@Body() body: any) {
    return await this.notificationService.handleNotification(body);
  }
}
