import React from "react";
import AddCategoryContainer from "../addCategoryContainer/AddCategoryContainer";
import AddItemContainer from "../addItemContainer/AddItemContainer";
import style from "./ModalWindow.module.css";

type ModalWindowProps = {
  type: string;
  handleModalWindow(): void;
  id?: string;
};
function ModalWindow(props: ModalWindowProps) {
  const { type, handleModalWindow, id = "no" } = props;
  return (
    <div className={style.modal_window}>
      {type === "category" && <AddCategoryContainer handleModalWindow={handleModalWindow} />}
      {type === "item" && (
        <AddItemContainer
          handleModalWindow={handleModalWindow}
          id={id}
        />
      )}
    </div>
  );
}

export default ModalWindow;
