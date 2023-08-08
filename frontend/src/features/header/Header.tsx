import React from "react";
import style from "./Header.module.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";
import { useAppDispatch } from "../../redux/store";
import { logout } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/logo";

function Header() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleLogout = (event: React.FormEvent): void => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      event.preventDefault();
      dispatch(logout());
    }
  };
  return (
    <div className={style.header}>
      <div className={style.header_content}>
        <div>
          <div className={style.logo}>
            <Logo />
          </div>
        </div>
        <div className={style.like_user}>
          <div className={style.like}></div>
          <a href='/user'>
            <div className={style.user}></div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;

{
  /* {user && <button onClick={handleLogout}>выход</button>} */
}
