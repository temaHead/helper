import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/selectors";
import { useAppDispatch } from "../../redux/store";
import { logout } from "../../redux/authSlice";

function Home() {
  const user = useSelector(selectUser);

  const dispatch = useAppDispatch();

  const handleLogout = (event: React.FormEvent): void => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      event.preventDefault();
      dispatch(logout());
      window.localStorage.removeItem("token");
    }
  };
  return (
    <div>
      <div>главный экран после логина</div>
      <div>{user && <div onClick={handleLogout}>exit</div>}</div>
    </div>
  );
}

export default Home;
