import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdamusNotificationService {
  async handleNotification(notification: any) {
    console.log(notification);
    return;
  }
}
