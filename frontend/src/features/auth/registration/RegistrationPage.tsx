import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./RegistrationPage.module.css";
import { useAppDispatch } from "../../../redux/store";
import { registrationAsync } from "../../../redux/authSlice";

function RegistrationPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
    dispatch(registrationAsync({ email, password }));
  };

  const handleLinkLogin = (event: React.MouseEvent): void => {
    event.preventDefault();
    navigate("/login");
  };

  return (
    <div className={style.registrationPage}>
      <form
        className={style.registrationForm}
        onSubmit={handleSubmit}
      >
        <div className={style.containerInput}>
          <input
            type='email'
            placeholder='e-mail'
            id='email-input'
            name='email'
            className={style.input}
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type='password'
            placeholder='password'
            id='password-input'
            name='password'
            className={style.input}
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className={style.containerButton}>
          <button
            type='submit'
            className={style.buttonRegistration}
          >
            Зарегистрировать
          </button>
          <button
            onClick={handleLinkLogin}
            className={style.linkLogin}
          >
            У меня есть аккаунт
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationPage;
