import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { NestjsFormDataModule } from 'nestjs-form-data';
import { EventListner } from './event.listners';
import { ProdamusHookController } from './prodamus.controller';
import { ProdamusNotificationModule } from '../src/module';

@Module({
  imports: [
    NestjsFormDataModule,
    EventEmitterModule.forRoot(),
    ProdamusNotificationModule,
  ],
  controllers: [ProdamusHookController],
  providers: [EventListner],
})
export class AppModule {}
