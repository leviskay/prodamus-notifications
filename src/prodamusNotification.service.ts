import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdamusNotificationService {
  async handleNotification(notification: any) {
    console.log(notification);
    if (notification?.products && notification.subscription) {
      console.log('Подписка создана');
    } else if (notification?.products && !notification.subscription) {
      console.log('Обычный платеж');
    } else if (notification.subscription) {
      if (notification?.subscription?.action_code == 'auto_payment') {
        console.log('Успешное продление');
      } else if (notification?.subscription?.action_code == 'deactivation') {
        console.log('Диактивация подписки');
      } else if (notification?.subscription?.action_code == 'finish') {
        console.log('Окончание подписки');
      } else if (notification?.subscription?.error) {
        console.log('Ошибка');
      } else if (
        notification?.subscription?.notification_code ===
        'auto_payment_reminder'
      ) {
        console.log('Уведомление о предстоящем списании');
      } else {
        console.log('Неизвестный тип уведомления');
      }
    }
    return;
  }
}
