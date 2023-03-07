interface Product {
  name: string;
  price: string;
  quantity: string;
  sum: string;
}

interface Subscription {
  id: string;
  profile_id: string;
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
  payment_num: string;
  autopayment: string;
}

interface SubscriptionCreated {
  date: string;
  order_id: string;
  order_num: string;
  domain: string;
  sum: string;
  customer_phone: string;
  customer_email: string;
  customer_extra: string;
  payment_type: string;
  commission: string;
  commission_sum: string;
  attempt: string;
  products: Product[];
  subscription: Subscription;
}
