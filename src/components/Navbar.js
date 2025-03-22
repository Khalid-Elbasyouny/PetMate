import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">الرئيسية</Link></li>
        <li><Link to="/add-pet">إضافة حيوان</Link></li>
        <li><Link to="/profile">ملفي الشخصي</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
