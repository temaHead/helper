import React from "react";

import style from "./LoginPage.module.css";
import Logo from "../../../components/logo";
import Toggle from "../../../components/toggle/Toggle";
import Form from "../../../components/form/Form";

function LoginPage() {
  const [emailButtonActive, setEmailButtonActive] = React.useState(true);

  return (
    <div className={style.loginPage}>
      <div className={style.loginPage_head}>
        <div>*</div>
      </div>
      <div className={style.loginPage_container}>
        <div className={style.loginPage_container_logo}>
          <a
            href='/start'
            className={style.logo}
          >
            <Logo />
          </a>
        </div>
        <div className={style.loginPage_container_tumbler}>
          <Toggle
            emailButtonActive={emailButtonActive}
            setEmailButtonActive={setEmailButtonActive}
          />
        </div>
        <div className={style.loginPage_container_form}>
          <Form emailButtonActive={emailButtonActive} />
        </div>
        <div className={style.loginPage_container_lowerBlock}>
          <div>войти с помощью</div>
          <div>гугл картинки</div>
          <div>подробнее</div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
