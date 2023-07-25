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

export type CategoriesListState = {
  categoriesList: CategoryType[];
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
