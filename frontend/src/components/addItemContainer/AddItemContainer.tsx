import React from "react";
import { useAppDispatch } from "../../redux/store";
import style from "./AddItemContainer.module.css";
import { addItem } from "../../redux/itemSlice";

type AddItemContainerProps = {
  handleModalWindow(): void;
  id: string;
};

function AddItemContainer(props: AddItemContainerProps) {
  const { handleModalWindow, id } = props;
  const [itemName, setItemName] = React.useState("");
  const [count, setCount] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");

  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(
      addItem({
        itemName,
        description,
        count,
        price,
        categoryId: id,
      })
    );
    handleModalWindow();
  };

  return (
    <div className={style.add_item_container}>
      <div className={style.container_btn_back}>
        <button
          className={style.btn_back}
          onClick={() => handleModalWindow()}
        >
          <img src='/arrow.svg'
          className={style.img_arrow} />
        </button>
      </div>
      <form
        onSubmit={handleSubmit}
        className={style.form_add}
      >
        <div className={style.title}>Добавить карточку</div>
        <input
          type='text'
          placeholder='Назовите карточку'
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Описание'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type='number'
          placeholder='Цена'
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type='number'
          placeholder='Количество'
          value={count}
          onChange={(e) => setCount(e.target.value)}
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

export default AddItemContainer;
