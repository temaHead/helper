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

export type ListState = {
  categoriesList: CategoryType[];
  itemsList: ItemType[];
};

export type CategoryType = {
  _id: string;
  categoryName: string;
  open: boolean;
  userId: string;
  secret: string;
  description: string;
};

export type AddCaregory = {
  categoryName: string;
  open: boolean;
  secret: string;
  description: string;
};

export type ItemType = {
  _id: string;
  itemName: string;
  descriptoin: string;
  count: string;
  price: string;
  categoryId: string;
  userId: string;
};

export type AddItem = {
  itemName: string;
  description: string;
  count: string;
  price: string;
  categoryId: string;
};
