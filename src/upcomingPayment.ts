interface Subscription {
  type: string;
  notification_code: string;
  id: string;
  active: string;
  active_manager: string;
  active_user: string;
  cost: string;
  name: string;
  limit_autopayments: string;
  autopayments_num: string;
  first_payment_discount: string;
  next_payment_discount: string;
  next_payment_discount_num: string;
  date_create: string;
  date_first_payment: string;
  date_last_payment: string;
  date_next_payment: string;
  date_next_payment_discount: string;
  current_attempt: string;
  payment_num: string;
  autopayment: string;
}

interface UpcomingPayment {
  date: string;
  order_id: string;
  order_num: string;
  domain: string;
  sum: string;
  customer_phone: string;
  payment_type: string;
  attempt: string;
  discount_value: string;
  subscription: Subscription;
}
