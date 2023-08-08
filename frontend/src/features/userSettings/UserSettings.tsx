import React from "react";
import style from "./UserSettings.module.css";

function UserSettings() {
  return (
    <div className={style.user_settings}>
      <div className={style.user_settings_logo}>
        <div className={style.logo}></div>
        <div className={style.edit}>редактировать</div>
      </div>
      <div className={style.user_settings_listSettings}>
        <div>настройка 1</div>
        <div>настройка 2</div>
        <div>настройка 2</div>
      </div>
    </div>
  );
}

export default UserSettings;
