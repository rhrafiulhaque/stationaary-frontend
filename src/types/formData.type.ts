export type TFormData = {
  address: string;
  email: string;
  name: string;
  password: string;
  phone: string;
};

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};

export type TOrder = {
  _id: string;
  products: {
    product: {
      _id: string;
      quantity: number;
    }[];
  };
  status: string;
  totalPrice: number;
  transaction: {
    id: string;
    transactionStatus: string;
    bank_status: string;
    sp_code: string;
    sp_message: string;
    method: string;
    date_time: string;
  };
  user: {
    id?: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    role: "admin" | "user";
    isBlocked: boolean;
    profilePhoto?: string;
  };
  createdAt: string;
};
