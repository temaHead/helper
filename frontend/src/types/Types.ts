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
  _id: number;
  categoryName: string;
  open: boolean;
  userId: string;
  secret: string;
};
