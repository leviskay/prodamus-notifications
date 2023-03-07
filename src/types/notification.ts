export interface Notification {
  date: string;
  order_id: string;
  order_num: string;
  domain: string;
  sum: string;
  customer_phone: string;
  customer_email?: string;
  customer_extra: string;
  payment_type: string;
  commission: string;
  commission_sum?: string;
  attempt: string;
}
