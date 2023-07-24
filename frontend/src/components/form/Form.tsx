import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import style from "./Form.module.css";
import { loginAsync } from "../../redux/authSlice";
import IMask from "imask";

type FormProps = {
  emailButtonActive: boolean;
};

function Form(props: FormProps) {
  const maskOptions = {
    mask: "+{7}(000)000-00-00",
  };

  const { emailButtonActive } = props;

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setPhone(event.target.value);
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

  const phoneMask = document
    .querySelector("form")

    ?.getElementsByTagName("input")[0];
  if (phoneMask && !emailButtonActive) {
    IMask(phoneMask, maskOptions);
  }
  return (
    <form onSubmit={handleSubmit}>
      {emailButtonActive ? (
        <div className={style.form_inputs}>
          <input
            type='email'
            placeholder='E-mail'
            id='e-mail-input'
            name='e-mail'
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type='password'
            placeholder='Пароль'
            id='password-input'
            name='password'
            value={password}
            onChange={handlePasswordChange}
          />
          <div className={style.form_removePass}>Забыли пароль?</div>
        </div>
      ) : (
        <div className={style.form_inputs}>
            <input
              type='tel'
              placeholder='+7 (   )___-__-__'
              id='phone'
              name='phone'
              value={phone}
              onChange={handlePhoneChange}
            />
        </div>
      )}

      <div className={style.form_buttons}>
        <button
          type='submit'
          className={style.form_buttons_log}
        >
          Войти
        </button>
        <button
          onClick={handleLinkRegistration}
          className={style.form_buttons_reg}
        >
          Создать аккаунт
        </button>
      </div>
    </form>
  );
}

export default Form;
