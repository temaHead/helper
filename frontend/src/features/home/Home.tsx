import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCategories, selectUser } from "../../redux/selectors";
import Header from "../header/Header";
import style from "./Home.module.css";
import SatrtPage from "../start/SatrtPage";
import Categories from "../../components/categories/Categories";
import ModalWindow from "../../components/modalWindow/ModalWindow";

function Home() {
  const user = useSelector(selectUser);
  const [openModal, setOpenModal] = useState(false);
  const handleModalWindow = (): void => {
    setOpenModal(false);
  };

  return (
    <>
      {user ? (
        <div className={style.home}>
          <Header />
          <div className={style.home_content}>
            <div className={style.commercial_block}>рекламный блок</div>
            {openModal ? (
              <ModalWindow
                type={"category"}
                handleModalWindow={handleModalWindow}
              />
            ) : (
              <div className={style.rooms}>
                Мои списки
                <Categories />
                <div className={style.rooms_buttonAdd}>
                  <button onClick={() => setOpenModal(true)}>Добавить список</button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <SatrtPage />
      )}
    </>
  );
}

export default Home;

{
  /* <div>{user && <div onClick={handleLogout}>exit</div>}</div> */
}
