import React from "react";
import css from "./Dashboard.module.css";
import { cardsData, groupNumber } from "../../data";
const Dashboard = () => {
  
  return (
    <div className={css.container}>
      {/* left side */}
      <div className={`${css.dashboard} theme-container`}>
        <div className={css.dashboardHead}>
          <div className={css.head}>
            <span>Dashboard</span>
            <div className={css.durationButton}>
              <select>
                <option value="">1 week</option>
                <option value="">1 month</option>
                <option value="">1 year</option>
              </select>
            </div>
          </div>
          <div className={css.cards}>
            {cardsData.map((card, index) => (
              <div className={css.card} key={card.title + index}>
                <div className={css.cardHead}>
                  <span>{card.title}</span>
                  <span>+{card.change}</span>
                </div>
                <div className={css.cardAmount}>
                  <span>$</span>
                  <span>{groupNumber(card.amount)}</span>
                </div>
              </div>
          ))}
          </div>
        </div>
      </div>
      {/* right side */}
      <div className={css.orders}>orders</div>
    </div>
  );
};

export default Dashboard;
