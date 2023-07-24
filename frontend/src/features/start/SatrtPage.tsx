import React from "react";
import style from "./StartPage.module.css";
import { Link } from "react-router-dom";

function SatrtPage() {
  return (
    <>
      <div>стартовая страница для тех кто не залогинен</div>
      <Link
        className={style.a}
        to='/login'
      >
        <div className={style.login}>Войти</div>
      </Link>
      <Link
        className={style.a}
        to='/registration'
      >
        <div className={style.reg}>Зарегистрироваться</div>
      </Link>
    </>
  );
}

export default SatrtPage;
