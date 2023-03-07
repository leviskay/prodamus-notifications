export interface Subscription {
  id: string;
  profile_id?: string;
  active?: string;
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
  type?: string;
  action_code?: string;
  error_code?: string;
  error?: string;
  payment_date?: string;
}
