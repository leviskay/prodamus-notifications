import { SubscriptionNotification } from 'src/types/subscriptionNotification';
import { ProdamusEvent } from './ProdamusEvents';

export class PaymentErrorOccuredEvent extends ProdamusEvent<SubscriptionNotification> {
  static eventName = 'PaymentErrorOccuredEvent';

  static create(payload: SubscriptionNotification) {
    return new this(this.eventName, payload);
  }
}
