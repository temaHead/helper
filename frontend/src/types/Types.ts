export type User = {
  _id: number;
  email: string;
};

export type AuthState = {
  user?: User;
};

export type LoginRegData = {
  email: string;
  password: string;
};

