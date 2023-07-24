import React from "react";
import { useSelector } from "react-redux";
import { selectCategories, selectUser } from "../../redux/selectors";
import Header from "../header/Header";
import style from "./Home.module.css";
import SatrtPage from "../start/SatrtPage";
import Categories from "../../components/categories/Categories";

function Home() {
  const user = useSelector(selectUser);

  return (
    <>
      {user ? (
        <div className={style.home}>
          <Header />
          <div className={style.home_content}>
            <div className={style.commercial_block}>рекламный блок</div>
            <div className={style.rooms}>
              Мои категории
              <Categories />
              <div className={style.rooms_buttonAdd}>
                <button>add</button>
              </div>
            </div>
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
