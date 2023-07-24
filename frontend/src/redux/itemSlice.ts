import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as types from "../types/Types";
import axios from "./axios";

const initialState: types.CategoriesListState = {
  categoriesList: [],
};

/**
 * Получение категорий пользователя
 */
export const getCategories = createAsyncThunk("my/getCategoriesAsync", async () => {
  const { data } = await axios.get("/my/categories");
  return data;
});

/**
 * Добавляем категорию
 */
export const addCaregory = createAsyncThunk("my/categoriesAsync", async (category: types.CategoryType) => {
  const { data } = await axios.post("/my/categories", category);
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
      });
  },
});

export default itemSlice.reducer;
