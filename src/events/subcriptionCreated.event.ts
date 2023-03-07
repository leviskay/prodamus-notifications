import { ProdamusEvent } from './ProdamusEvents';
import { SubscriptionNotification } from 'src/types/subscriptionNotification';
import { Product } from 'src/types/product';

interface SubscriptionCreatedPayload extends SubscriptionNotification {
  products: Product[];
}

export class SubscriptionCreatedEvent extends ProdamusEvent<SubscriptionCreatedPayload> {
  static eventName = 'SubscriptionCreatedEvent';

  static create(payload: SubscriptionCreatedPayload) {
    return new this(this.eventName, payload);
  }
}
