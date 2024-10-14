import React from "react";

import { IoLogOutOutline, IoNotifications, IoSearch,  } from "react-icons/io5";

import "./Header.css";

const Header  = () => {
  return ( 
  <div className="header">
    <h2 className="header-tittle">Technical Based Product Dashboard</h2>

<div className="search-box">
<input type="text" placeholder="Search..." />
<IoSearch className="search-icon" />
</div>

<div className="user-box">
    <IoNotifications className="user--icons" />
    <IoSearch className="user--icon" />
    <button>Upgrade Plane</button>

</div>
 </div>
  );
};

export default Header;
