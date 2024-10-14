import React from 'react';
import Card from './Card';
import { IoCart, IoPeople, IoCash, IoPerson } from 'react-icons/io5';

const CardList = () => {
  const data = {
    sales: {
      title: "Total Sales",
      amount: "$27,340",
      growth: "+44%",
      icon: <IoCart />,
      backgroundColor: "#FF7B00",
    },
    expenses: {
      title: "Total Expenses",
      amount: "$12,500",
      growth: "-15%",
      icon: <IoCash />,
      backgroundColor: "#FFA200",
    },
    visitors: {
      title: "Total Visitors",
      amount: "15,000",
      growth: "+20%",
      icon: <IoPeople />,
      backgroundColor: "#FFC300",
    },
    orders: {
      title: "Total Orders",
      amount: "500",
      growth: "+10%",
      icon: <IoPerson />,
      backgroundColor: "#FFEA00",
    },
  };

  return (
    <div className="card--list">
      {Object.keys(data).map((category, index) => (
        <Card key={index}data={data[category]}/>
      ))}
    </div>
  );
};

export default CardList;
