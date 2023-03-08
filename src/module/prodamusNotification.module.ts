import { Module } from '@nestjs/common';
import { ProdamusEventService } from './prodamusEventsService';
import { ProdamusNotificationService } from './prodamusNotification.service';

@Module({
  providers: [ProdamusNotificationService, ProdamusEventService],
  exports: [ProdamusNotificationService],
})
export class ProdamusNotificationModule {}
