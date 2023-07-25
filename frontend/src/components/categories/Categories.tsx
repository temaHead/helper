import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCategories } from "../../redux/selectors";
import style from "./Categorises.module.css";
import { useAppDispatch } from "../../redux/store";
import { getCategories } from "../../redux/itemSlice";
import Category from "../category/Category";

function Categories() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  const categories = useSelector(selectCategories);

  return (
    <div className={style.categories}>
      {categories.map((el) => (
        <Category category={el} />
      ))}
    </div>
  );
}

export default Categories;
