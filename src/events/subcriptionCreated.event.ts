import { ProdamusEvent } from './ProdamusEvents';
import { SubscriptionNotification } from 'src/types/subscriptionNotification';
import { Product } from 'src/types/product';

interface PaymentCreatedPayload extends SubscriptionNotification {
  products: Product[];
}

export class SubscriptionCreatedEvent extends ProdamusEvent<PaymentCreatedPayload> {
  static eventName = 'SubscriptionCreatedEvent';

  static create(payload: PaymentCreatedPayload) {
    return new this(this.eventName, payload);
  }
}
