import { SubscriptionNotification } from 'src/types/subscriptionNotification';
import { ProdamusEvent } from './ProdamusEvents';

export class SubscriptionRenewedEvent extends ProdamusEvent<SubscriptionNotification> {
  static eventName = 'SubscriptionRenewedEvent';

  static create(payload: SubscriptionNotification) {
    return new this(this.eventName, payload);
  }
}
