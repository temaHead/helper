import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/store";

import style from "./LoginPage.module.css";
import { loginAsync } from "../../../redux/authSlice";

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    dispatch(loginAsync({ email, password }));
  };

  const handleLinkRegistration = (event: React.MouseEvent): void => {
    event.preventDefault();
    navigate("/registration");
  };

  return (
    <div className={style.loginPage}>
      <div className={style.loginPage_head}>
        <div>*</div>
      </div>
      <div className={style.loginPage_container}>
        <div className={style.loginPage_container_logo}>logo</div>
        <div className={style.loginPage_container_tumbler}></div>
        <div className={style.loginPage_container_form}>
          <form onSubmit={handleSubmit}>
            <div className={style.loginPage_container_form_inputs}>
              <input
                type='text'
                placeholder='E-mail'
                id='e-mail-input'
                name='e-mail'
                value={email}
                onChange={handleEmailChange}
              />
              <input
                type='text'
                placeholder='Пароль'
                id='password-input'
                name='password'
                value={password}
                onChange={handlePasswordChange}
              />
              <div className={style.loginPage_container_form_removePass}>Забыли пароль?</div>
            </div>
            <div className={style.loginPage_container_form_buttons}>
              <button
                type='submit'
                className={style.loginPage_container_form_buttons_log}
              >
                Войти
              </button>
              <button
                onClick={handleLinkRegistration}
                className={style.loginPage_container_form_buttons_reg}
              >
                Создать аккаунт
              </button>
            </div>
          </form>
        </div>
        <div className={style.loginPage_container_lowerBlock}>
          <div> войти с помощью</div>
          <div>гугл картинки</div>
          <div>подробнее</div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
