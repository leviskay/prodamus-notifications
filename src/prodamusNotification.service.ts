import { Injectable } from '@nestjs/common';
import { PaymentCreatedEvent } from './events/paymentCreated.event';
import { PaymentErrorOccuredEvent } from './events/paymentErrorOccured.event';
import { ProdamusEvent } from './events/ProdamusEvents';
import { SubscriptionCreatedEvent } from './events/subcriptionCreated.event';
import { SubscriptionDeactivatedEvent } from './events/subscriptionDeactivated.event';
import { SubscriptionFinishedEvent } from './events/subscriptionFinished.event';
import { SubscriptionRenewedEvent } from './events/subscriptionRenewed.event';
import { UpcomingPaymentNotificationRecievedEvent } from './events/upcomingPaymentNotificationRecieved.event';
import { ProdamusEventService } from './prodamusEventsService';

const eventFactories: {
  create: (notification: any) => ProdamusEvent<any>;
  isApplicableForNotification: (notification: any) => boolean;
}[] = [
  {
    create: SubscriptionCreatedEvent.create.bind(SubscriptionCreatedEvent),
    isApplicableForNotification: (notification) =>
      notification?.products && notification?.subscription,
  },
  {
    create: PaymentCreatedEvent.create.bind(PaymentCreatedEvent),
    isApplicableForNotification: (notification: any) =>
      notification?.products && !notification.subscription,
  },
  {
    create: SubscriptionRenewedEvent.create.bind(SubscriptionRenewedEvent),
    isApplicableForNotification: (notification: any) =>
      notification?.subscription?.action_code == 'auto_payment',
  },
  {
    create: SubscriptionDeactivatedEvent.create.bind(
      SubscriptionDeactivatedEvent,
    ),
    isApplicableForNotification: (notification: any) =>
      notification?.subscription?.action_code == 'deactivation',
  },

  {
    create: SubscriptionFinishedEvent.create.bind(SubscriptionFinishedEvent),
    isApplicableForNotification: (notification: any) =>
      notification?.subscription?.action_code == 'finish',
  },
  {
    create: PaymentErrorOccuredEvent.create.bind(PaymentErrorOccuredEvent),
    isApplicableForNotification: (notification: any) =>
      notification?.subscription?.error,
  },

  {
    create: UpcomingPaymentNotificationRecievedEvent.create.bind(
      UpcomingPaymentNotificationRecievedEvent,
    ),
    isApplicableForNotification: (notification: any) =>
      notification?.subscription?.notification_code === 'auto_payment_reminder',
  },
];

@Injectable()
export class ProdamusNotificationService {
  constructor(private readonly eventService: ProdamusEventService) {}

  async handleNotification(notification: any) {
    const factory = eventFactories.find((factory) =>
      factory.isApplicableForNotification(notification),
    );
    if (factory == undefined) {
      return console.error('Неизвестный тип уведомления', notification);
    }

    const event = factory.create(notification);
    this.eventService.emit(event);
    return;
  }
}
