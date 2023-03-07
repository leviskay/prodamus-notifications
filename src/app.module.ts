import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { EventListner } from './event.listners';
import { ProdamusHookController } from './prodamus.controller';
import { ProdamusEventService } from './prodamusEventsService';
import { ProdamusNotificationService } from './prodamusNotification.service';

@Module({
  imports: [NestjsFormDataModule, EventEmitterModule.forRoot()],
  controllers: [ProdamusHookController],
  providers: [ProdamusNotificationService, EventListner, ProdamusEventService],
})
export class AppModule {}
