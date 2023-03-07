import { Subscription } from './subscription';

export interface SubscriptionNotification extends Notification {
  subscription: Subscription;
}
