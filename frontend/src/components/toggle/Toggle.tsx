import React from "react";
import style from "./Toggle.module.css";
import classNames from "classnames";

type ToggleProps = {
  emailButtonActive: boolean;
  setEmailButtonActive: React.Dispatch<React.SetStateAction<boolean>>;
};

function Toggle(props: ToggleProps) {
  const { emailButtonActive, setEmailButtonActive } = props;

  return (
    <div className={style.toggleWrapper}>
      <div className={style.toggleInput}>
        <button
          className={classNames(style.toggleButton, emailButtonActive && style.buttonActive)}
          onClick={() => {
            setEmailButtonActive(true);
          }}
        >
          <span className={style.toggleButtonText}>Почта</span>
        </button>
      </div>
      <div className={style.toggleInput}>
        <button
          className={classNames(style.toggleButton, !emailButtonActive && style.buttonActive)}
          onClick={() => {
            setEmailButtonActive(false);
          }}
        >
          <span className={style.toggleButtonText}>Телефон</span>
        </button>
      </div>
    </div>
  );
}

export default Toggle;
