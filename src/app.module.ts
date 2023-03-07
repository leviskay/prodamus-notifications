import { Module } from '@nestjs/common';
import { ProdamusHookController } from './prodamus.controller';
import { ProdamusNotificationService } from './prodamusNotification.service';

@Module({
  imports: [],
  controllers: [ProdamusHookController],
  providers: [ProdamusNotificationService],
})
export class AppModule {}
