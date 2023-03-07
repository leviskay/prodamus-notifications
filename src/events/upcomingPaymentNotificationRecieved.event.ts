import { SubscriptionNotification } from 'src/types/subscriptionNotification';
import { ProdamusEvent } from './ProdamusEvents';

export class UpcomingPaymentNotificationRecievedEvent extends ProdamusEvent<SubscriptionNotification> {
  static eventName = 'UpcomingPaymentNotificationRecievedEvent';

  static create(payload: SubscriptionNotification) {
    return new this(this.eventName, payload);
  }
}
