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
      <form
        className={style.loginForm}
        onSubmit={handleSubmit}
      >
        <div className={style.containerInput}>
          <input
            type='text'
            placeholder='E-mail'
            id='e-mail-input'
            name='e-mail'
            className={style.input}
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type='text'
            placeholder='Пароль'
            id='password-input'
            name='password'
            className={style.input}
            value={password}
            onChange={handlePasswordChange}
          />
          <div className={style.removePass}>Забыли пароль?</div>
        </div>
        <div className={style.containerButton}>
          <button
            type='submit'
            className={style.buttonLogin}
          >
            Войти
          </button>
          <button
            onClick={handleLinkRegistration}
            className={style.linkRegistration}
          >
            Создать аккаунт
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
