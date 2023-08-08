import React from "react";
import style from "./Category.module.css";
import { CategoryType } from "../../types/Types";
import { useAppDispatch } from "../../redux/store";
import { deleteCategory } from "../../redux/itemSlice";
import { useNavigate } from "react-router-dom";

type CategoryProps = {
  category: CategoryType;
};

function Category(props: CategoryProps) {
  const { category } = props;
  const dispatch = useAppDispatch()
  const navigate=useNavigate()

const handleDeleteCategory=(event:React.MouseEvent):void=>{
  event.preventDefault()
  dispatch(deleteCategory(category._id))
}

  return (
    <div className={style.category} onClick={()=>navigate(`/category/${category._id}`)}>
      <div className={style.category_name}>{category.categoryName}</div>
      <div onClick={handleDeleteCategory} className={style.category_delete}> delete</div>
      {!category.open ? (
        <div className={style.key}>
          <img
            src='/key.svg'
            className={style.img_key}
          />
        </div>
      ) : (
        <div className={style.key_open}>
          <img
            src='/unlocked.svg'
            className={style.img_key_open}
          />
        </div>
      )}
    </div>
  );
}

export default Category;
