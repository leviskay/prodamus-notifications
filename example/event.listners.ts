import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { PaymentCreatedEvent } from '../src/events/paymentCreated.event';
import { PaymentErrorOccuredEvent } from '../src/events/paymentErrorOccured.event';
import { SubscriptionCreatedEvent } from '../src/events/subcriptionCreated.event';
import { SubscriptionDeactivatedEvent } from '../src/events/subscriptionDeactivated.event';
import { SubscriptionFinishedEvent } from '../src/events/subscriptionFinished.event';
import { SubscriptionRenewedEvent } from '../src/events/subscriptionRenewed.event';
import { UpcomingPaymentNotificationRecievedEvent } from '../src/events/upcomingPaymentNotificationRecieved.event';

@Injectable()
export class EventListner {
  @OnEvent(SubscriptionCreatedEvent.eventName)
  onSubscriptionCreated(event: SubscriptionCreatedEvent) {
    console.log('Подписка создана');
    console.log(`Клиент: ${event.payload?.order_num}`);
    console.log(`Подписка: ${event.payload.subscription.name}`);
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
    console.log('Подписка завершена');
  }

  @OnEvent(PaymentErrorOccuredEvent.eventName)
  onPaymentErrorOccured() {
    console.log('Ошибка платежа');
  }

  @OnEvent(UpcomingPaymentNotificationRecievedEvent.eventName)
  onUpcomingPaymentNotificationRecieved() {
    console.log('Уведомление о предстоящем списании');
  }
}
