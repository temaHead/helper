import React from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import { getItems } from "../../redux/itemSlice";
import { useSelector } from "react-redux";
import { selectItems } from "../../redux/selectors";
import ModalWindow from "../../components/modalWindow/ModalWindow";
import style from "./CategoryPage.module.css";
import Item from "../../components/item/Item";

function CategoryPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [openModal, setOpenModal] = React.useState(false);
  const handleModalWindow = (): void => {
    setOpenModal(false);
  };
  React.useEffect(() => {
    if (id) dispatch(getItems(id));
  }, []);
  const items = useSelector(selectItems);
  console.log(items);

  return (
    <div className={style.items_container}>
      <Link to='/'>
        <button
          className={style.items_back}
          onClick={() => {}}
        >
          back
        </button>
      </Link>
      <div className={style.items_content}>
        <div className={style.category_name}>Список №1</div>{" "}
        {openModal ? (
          <ModalWindow
            type={"item"}
            id={id}
            handleModalWindow={handleModalWindow}
          />
        ) : (
          <>
            <div className={style.items}>
              {items.map((el) => (
                <Item
                  key={el._id}
                  item={el}
                />
              ))}
            </div>
            <div className={style.items_buttonAdd}>
              <button onClick={() => setOpenModal(true)}>Добавить карточку</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CategoryPage;
