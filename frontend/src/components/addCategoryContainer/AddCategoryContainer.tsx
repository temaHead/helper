import React, { useState } from "react";
import style from "./AddCategoryContainer.module.css";
import { useAppDispatch } from "../../redux/store";
import { addCaregory } from "../../redux/itemSlice";

type AddCategoryContainerProps = {
  handleModalWindow(): void;
};

function AddCategoryContainer(props: AddCategoryContainerProps) {
  const { handleModalWindow } = props;
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(
      addCaregory({
        categoryName: category,
        open: false,
        secret: "",
        description: description,
      })
    );
    handleModalWindow();
  };

  return (
    <div className={style.add_category_container}>
      <div className={style.container_btn_back}>
        <button
          onClick={() => handleModalWindow()}
          className={style.btn_back}
        >
          {" "}
          стрелка назад
        </button>
      </div>
      <form
        onSubmit={handleSubmit}
        className={style.form_add}
      >
        <div className={style.title}>Добавить категорию</div>
        <input
          type='text'
          placeholder='Назовите категориию'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type='text'
          placeholder='Описание'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className={style.buttons}>
          <button
            type='submit'
            className={style.btn_save}
          >
            Сохранить
          </button>
          <button
            type='button'
            className={style.btn_exit}
            onClick={() => handleModalWindow()}
          >
            Отменить
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCategoryContainer;
