import React from "react";
import style from "./Category.module.css";
import { CategoryType } from "../../types/Types";

type CategoryProps = {
  category: CategoryType;
};

function Category(props: CategoryProps) {
  const { category } = props;
  return (
    <div className={style.category}>
      <div className={style.category_name}>{category.categoryName}</div>
      <div>статус</div>
    </div>
  );
}

export default Category;
