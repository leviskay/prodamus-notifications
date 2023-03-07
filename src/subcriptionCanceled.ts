interface Subscription {
  type: string;
  action_code: string;
  action_reason: string;
  date: string;
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
  next_payment_discount_num: null | string;
  date_create: string;
  date_first_payment: string;
  date_last_payment: string;
  date_next_payment: null | string;
  date_next_payment_discount: null | string;
  current_attempt: string;
  payment_num: string;
  autopayment: string;
}

interface SubscriptionCanceled {
  date: string;
  order_id: string;
  order_num: string | null;
  domain: string;
  sum: string;
  customer_phone: string;
  payment_type: string;
  attempt: string;
  discount_value: string;
  subscription: Subscription;
}
