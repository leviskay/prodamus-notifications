import { Injectable } from '@nestjs/common';
import { PaymentCreatedEvent } from './events/paymentCreated.event';
import { PaymentErrorOccuredEvent } from './events/paymentErrorOccured.event';
import { SubscriptionCreatedEvent } from './events/subcriptionCreated.event';
import { SubscriptionDeactivatedEvent } from './events/subscriptionDeactivated.event';
import { SubscriptionFinishedEvent } from './events/subscriptionFinished.event';
import { SubscriptionRenewedEvent } from './events/subscriptionRenewed.event';
import { UpcomingPaymentNotificationRecievedEvent } from './events/upcomingPaymentNotificationRecieved.event';
import { ProdamusEventService } from './prodamusEventsService';

@Injectable()
export class ProdamusNotificationService {
  constructor(private readonly eventService: ProdamusEventService) {}

  async handleNotification(notification: any) {
    console.log(notification);
    if (notification?.products && notification.subscription) {
      this.eventService.emit(SubscriptionCreatedEvent.create(notification));
    } else if (notification?.products && !notification.subscription) {
      this.eventService.emit(PaymentCreatedEvent.create(notification));
    } else if (notification.subscription) {
      if (notification?.subscription?.action_code == 'auto_payment') {
        this.eventService.emit(SubscriptionRenewedEvent.create(notification));
      } else if (notification?.subscription?.action_code == 'deactivation') {
        this.eventService.emit(
          SubscriptionDeactivatedEvent.create(notification),
        );
      } else if (notification?.subscription?.action_code == 'finish') {
        this.eventService.emit(SubscriptionFinishedEvent.create(notification));
      } else if (notification?.subscription?.error) {
        this.eventService.emit(PaymentErrorOccuredEvent.create(notification));
      } else if (
        notification?.subscription?.notification_code ===
        'auto_payment_reminder'
      ) {
        this.eventService.emit(
          UpcomingPaymentNotificationRecievedEvent.create(notification),
        );
      } else {
        console.log('Неизвестный тип уведомления');
      }
    }
    return;
  }
}
