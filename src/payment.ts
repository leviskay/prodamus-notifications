interface Product {
  name: string;
  price: string;
  quantity: string;
  sum: string;
}

interface Payment {
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
  sys: string;
  vk_user_id: string;
  products: Product[];
  payment_status: string;
  payment_status_description: string;
}
