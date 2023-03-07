import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { PaymentCreatedEvent } from './events/paymentCreated.event';
import { PaymentErrorOccuredEvent } from './events/paymentErrorOccured.event';
import { SubscriptionCreatedEvent } from './events/subcriptionCreated.event';
import { SubscriptionDeactivatedEvent } from './events/subscriptionDeactivated.event';
import { SubscriptionFinishedEvent } from './events/subscriptionFinished.event';
import { SubscriptionRenewedEvent } from './events/subscriptionRenewed.event';
import { UpcomingPaymentNotificationRecievedEvent } from './events/upcomingPaymentNotificationRecieved.event';

@Injectable()
export class EventListner {
  @OnEvent(SubscriptionCreatedEvent.eventName)
  onSubscriptionCreated() {
    console.log('Подписка создана');
  }

  @OnEvent(PaymentCreatedEvent.eventName)
  onPaymentCreated() {
    console.log('Обычный платеж');
  }

  @OnEvent(SubscriptionRenewedEvent.eventName)
  onSubscriptionRenewed() {
    console.log('Продление подписки');
  }

  @OnEvent(SubscriptionDeactivatedEvent.eventName)
  onSubscriptionDiactivated() {
    console.log('Диактивация подписки');
  }

  @OnEvent(SubscriptionFinishedEvent.eventName)
  onSubscriptionFinished() {
    console.log('Finish');
  }

  @OnEvent(PaymentErrorOccuredEvent.eventName)
  onPaymentErrorOccured() {
    console.log('Error');
  }

  @OnEvent(UpcomingPaymentNotificationRecievedEvent.eventName)
  onUpcomingPaymentNotificationRecieved() {
    console.log('Уведомление о предстоящем списании');
  }
}
