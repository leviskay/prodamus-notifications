import { Product } from './product';

export interface PaymentNotification extends Notification {
  sys: string;
  products: Product[];
  payment_status: string;
  payment_status_description: string;
}
