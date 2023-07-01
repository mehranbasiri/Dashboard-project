import React from "react";
import css from "./Orders.module.css";
import logo from "../../images/logo.png";
import { groupNumber, ordersData } from "../../data";
import OrderPieChart from "../OrdersPieChart/OrderPieChart";
const Order = () => {
  return (
    <div className={`${css.container} theme-container`}>
      <div className={css.head}>
        <img src={logo} alt="logo" />
        <span>Orders Today</span>
      </div>
      <div className={`grey-container ${css.stat}`}>
        <span>Amount</span>
        <span>$ {groupNumber(4560)}</span>
      </div>
      <div className={css.orders}>
        {ordersData.map((ord, index) => (
          <div className={css.order} key={index}>
            <div>
              <span>{ord.name}</span>
              <span>{ord.change}</span>
            </div>
            <div>
              <span>{ord.type}</span>
              <span>Items:{ord.items}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={css.orderChart}>
        <span>Split by orders</span>
        <OrderPieChart />
      </div>
    </div>
  );
};

export default Order;
