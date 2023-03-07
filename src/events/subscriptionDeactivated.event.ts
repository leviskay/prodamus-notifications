import { SubscriptionNotification } from 'src/types/subscriptionNotification';
import { ProdamusEvent } from './ProdamusEvents';

export class SubscriptionDeactivatedEvent extends ProdamusEvent<SubscriptionNotification> {
  public static readonly eventName = 'SubscriptionDeactivatedEvent';

  static create(payload: SubscriptionNotification) {
    return new this(this.eventName, payload);
  }
}
