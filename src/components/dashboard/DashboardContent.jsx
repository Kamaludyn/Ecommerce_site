import React, { useState } from "react";
import { FaArchive, FaBell, FaPeopleArrows, FaTags } from "react-icons/fa";

const DashboardContent = ({ handleItemClick }) => {
  const cardContents = [
    {
      title: "Categories",
      amount: 40,
      icon: <FaTags className="card-icon" />,
    },
    {
      title: "Products",
      amount: 600,
      icon: <FaTags className="card-icon" />,
    },
    {
      title: "Orders",
      amount: 25,
      icon: <FaTags className="card-icon" />,
    },
    {
      title: "Customers",
      amount: 20,
      icon: <FaPeopleArrows className="card-icon" />,
    },
    {
      title: "Reviews",
      amount: 18,
      icon: <FaPeopleArrows className="card-icon" />,
    },
    {
      title: "Reports",
      amount: 35,
      icon: <FaBell className="card-icon" />,
    },
  ];

  return (
    <section className="main">
      <div className="main-title">
        <h1>Dashboard Overview</h1>
      </div>

      <div className="main-cards">
        {cardContents.map((content, index) => (
          <div
            className="card"
            key={index}
            onClick={() => handleItemClick(content.title)}
          >
            <div className="inner-card">
              <h3>{content.title}</h3>
              {content.icon}
            </div>
            <h1>{content.amount}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DashboardContent;
