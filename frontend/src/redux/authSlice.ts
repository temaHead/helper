import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as types from "../types/Types";
import axios from "./axios";

const initialState: types.AuthState = {
  user: undefined,
};

/**
 * Получение текущего юзера
 */
export const getUserAsync = createAsyncThunk("auth/getUserAsync", async () => {
  if (window.localStorage.getItem("token")) {
    const { data } = await axios.get("/auth/user");
    return data;
  }
});

/**
 * Авторизация пользоватея
 */
export const loginAsync = createAsyncThunk("auth/loginAsync", async (loginData: types.LoginRegData) => {
  const { data } = await axios.post("/auth/login", loginData);
  if ("token" in data) {
    window.localStorage.setItem("token", data.token);
    location.assign("/");
  }
  return data;
});

/**
 * Регистрация пользователя
 */
export const registrationAsync = createAsyncThunk(
  "auth/registrationAsync",
  async (regData: types.LoginRegData) => {
    const { data } = await axios.post("/auth/registration", regData);
    if ("token" in data) {
      location.assign("/");
    }
    return data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = undefined;
      window.location.assign("/start");
    },
  },
  extraReducers: (bilder) => {
    bilder
      // При успешном получении юзера
      .addCase(getUserAsync.fulfilled, (state, action) => {
        if (action.payload) {
          state.user = action.payload;
        }
      })
      // При успешной авторизации
      .addCase(loginAsync.fulfilled, (state, action) => {
        if (action.payload) {
          state.user = action.payload;
        }
      })
      // При успешной регистрации
      .addCase(registrationAsync.fulfilled, (state, action) => {
        if (action.payload) {
          state.user = action.payload;
        }
      });
  },
});

export default authSlice.reducer;

export const { logout } = authSlice.actions;
