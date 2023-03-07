import { PaymentNotification } from 'src/types/paymentNotification';
import { ProdamusEvent } from './ProdamusEvents';

export class PaymentCreatedEvent extends ProdamusEvent<PaymentNotification> {
  static eventName = 'PaymentCreatedEvent';

  static create(payload: PaymentNotification) {
    return new this(this.eventName, payload);
  }
}
