import { CategoryType, ItemType, User } from "../types/Types";
import { RootState } from "./store";

/**
 * Достаём юзера из стора
 */
export const selectUser = (state: RootState): User | undefined => state.auth.user;

/**
 * Достаём категории юзера из стора
 */
export const selectCategories = (state: RootState): CategoryType[] => state.item.categoriesList;

/**
 * Достаём карточки категории
 */
export const selectItems=(state:RootState):ItemType[]=>state.item.itemsList