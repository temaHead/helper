import { User } from "../types/Types";
import { RootState } from "./store";

export const selectUser = (state: RootState): User | undefined => state.auth.user;
