import { SubscriptionNotification } from 'src/types/subscriptionNotification';
import { ProdamusEvent } from './ProdamusEvents';

export class SubscriptionFinishedEvent extends ProdamusEvent<SubscriptionNotification> {
  public static readonly eventName = 'SubscriptionFinishedEvent';

  static create(payload: SubscriptionNotification) {
    return new this(this.eventName, payload);
  }
}
