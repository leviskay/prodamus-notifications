import { Body, Controller, Get } from '@nestjs/common';
import { ProdamusNotificationService } from './prodamusNotification.service';

@Controller('prodamus')
export class ProdamusHookController {
  constructor(
    private readonly notificationService: ProdamusNotificationService,
  ) {}
  @Get('payments')
  async paymentsHandler(@Body() body: any) {
    return await this.notificationService.handleNotification(body);
  }
}
