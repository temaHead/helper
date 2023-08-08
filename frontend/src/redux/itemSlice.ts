import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import * as types from "../types/Types";
import axios from "./axios";

const initialState: types.ListState = {
  categoriesList: [],
  itemsList: [],
};

/** * Получение категорий пользователя */
export const getCategories = createAsyncThunk("my/getCategoriesAsync", async () => {
  const { data } = await axios.get("/my/categories");
  return data;
});

/** * Добавляем категорию */
export const addCaregory = createAsyncThunk("my/categoriesAsync", async (category: types.AddCaregory) => {
  const { data } = await axios.post("/my/categories", category);
  return data;
});

/** * Удаление категории */
export const deleteCategory = createAsyncThunk("my/deleteCategoryAsync", async (categoryId: string) => {
  axios.delete(`/my/category/${categoryId}`);
  return categoryId;
});

/** * Получение карточек категории */
export const getItems = createAsyncThunk("my/getItemsAsync", async (id: string) => {
  const { data } = await axios.get(`/my/category/${id}`);
  return data;
});

/** * Добавление карточки */
export const addItem = createAsyncThunk("my/addItemAsync", async (item: types.AddItem) => {
  const { data } = await axios.post("/my/item", item);
  return data;
});

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        const categories = action.payload;
        state.categoriesList = categories;
      })
      .addCase(addCaregory.fulfilled, (state, action) => {
        const newCategory = action.payload;
        state.categoriesList.push(newCategory);
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categoriesList = state.categoriesList.filter((el) => el._id !== action.payload);
      })
      .addCase(getItems.fulfilled, (state, action) => {
        const items = action.payload;
        state.itemsList = items;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        const newItem = action.payload;
        state.itemsList.push(newItem);
      });
  },
});

export default itemSlice.reducer;
