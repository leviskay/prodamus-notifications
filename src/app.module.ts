import { Module } from '@nestjs/common';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { ProdamusHookController } from './prodamus.controller';
import { ProdamusNotificationService } from './prodamusNotification.service';

@Module({
  imports: [NestjsFormDataModule],
  controllers: [ProdamusHookController],
  providers: [ProdamusNotificationService],
})
export class AppModule {}
