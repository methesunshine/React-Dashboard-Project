import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./Sidebar.css";
import MenuList from "../Menu/MenuList";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="sidebar-container">
      {/* Sidebar Toggle Button */}
      <div className="sidebar-toggle" onClick={toggle}>
        {isOpen ? <IoIosArrowBack /> : <IoIosArrowForward />}
      </div>

      {/* Sidebar Content */}
      <div className={isOpen ? "sidebar open" : "sidebar"}>
        <div className="sidebar--logo">T B P</div>
        <MenuList />
      </div>
    </div>
  );
};

export default Sidebar;
