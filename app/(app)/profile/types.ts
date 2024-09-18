export type profileType = {
  address?: string;
  appNotify?: boolean;
  birthday?: string;
  email?: string;
  gender?: number;
  name?: string;
  phone: string;
  smsNotify?: boolean;
};

export type stateProp = {
  errors?: {
    name?: string[] | undefined;
    email?: string[] | undefined;
    birthday?: string[] | undefined;
    gender?: string[] | undefined;
    phone?: string[] | undefined;
    smsNotify?: string[] | undefined;
    address?: string[] | undefined;
    appNotify?: string[] | undefined;
  };
  message?: string;
};
