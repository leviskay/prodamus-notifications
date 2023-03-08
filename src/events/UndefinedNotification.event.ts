import { ProdamusEvent } from './ProdamusEvents';

export class UndefinedNotificationEvent extends ProdamusEvent<Notification> {
  public static eventName = 'UndefinedNotificationEvent';

  static create(payload: Notification) {
    console.error('Неизвестный тип уведомления', payload);
    return new this(this.eventName, payload);
  }
}
