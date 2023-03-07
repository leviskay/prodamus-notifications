import { Subscription } from './subscription';
import { Notification } from './notification';

export interface SubscriptionNotification extends Notification {
  subscription: Subscription;
}
