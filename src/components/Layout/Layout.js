import React from "react";
import css from "./Layout.module.css";
import moment from "moment/moment";
import profile from "../../images/profile.png";
import { BiSearch } from "react-icons/bi";
import Sidebar from "./Sidebar/Sidebar";
import { Navigate, useLocation, Outlet } from "react-router-dom";

export const Layout = () => {
  const { pathname } = useLocation();
  return (
    <div className={css.container}>
      <Sidebar />
      {pathname === "/" && <Navigate to="/dashboard" />}
      <div className={css.dashboard}>
        <div className={css.topBaseGradient}>
          <div className="gradient-red"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-blue"></div>
        </div>

        <div className={css.header}>
          <span>{moment().format("dddd,do MMM YYYY")}</span>
          <div className={css.searchBar}>
            <BiSearch size={30} />
            <input type="rext" placeholder="Search" />
          </div>
          <div className={css.profile}>
            <img src={profile} alt="profile img" />
            <div className={css.details}>
              <span>Mehran Basiri</span>
              <span>MehranBsl78@gmail.com</span>
            </div>
          </div>
        </div>
        <div className={css.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
