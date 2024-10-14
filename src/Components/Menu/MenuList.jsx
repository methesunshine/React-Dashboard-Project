import React from "react";
import "./MenuList.css";
import { Link } from "react-router-dom"; // Corrected import statement
import { IoDiamond, IoSettingsOutline, IoHelp, IoList, IoCodeWorking } from "react-icons/io5"; // Fixed icon imports

const MenuList = () => {
  return (
    <ul className="menu-list">
      {/* Use the Link component from react-router-dom */}
      <li>
        <Link to="/" className="menu-link">
          <IoDiamond /> Dashboard
        </Link>
      </li>
      <li>
        <Link to="/settings" className="menu-link">
          <IoSettingsOutline /> Settings
        </Link>
      </li>
      <li>
        <Link to="/product" className="menu-link">
          <IoHelp /> Product
        </Link>
      </li>
      <li>
        <Link to="/categories" className="menu-link">
          <IoList /> Categories
        </Link>
      </li>
      <li>
        <Link to="/customers" className="menu-link">
          <IoCodeWorking /> Customers
        </Link>
      </li>
      <li>
        <Link to="/inventory" className="menu-link">
          <IoDiamond /> Inventory
        </Link>
      </li>
        <li>
      <Link to="/reports" className="menu-link">
          <IoDiamond /> Reports
        </Link>
      </li>

    </ul>
  );
};

export default MenuList;
