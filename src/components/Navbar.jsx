import React, { useState } from "react";

const Navbar = ({ setCategory }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "technology",
  ];

  return (
    <div className="navbar">
      <div className="container">
        <span className="brand">XNews.</span>
        <ul className={menuOpen ? "nav-list active" : "nav-list"}>
          {categories.map((category) => (
            <li key={category} onClick={() => {
              setCategory(category)
              setMenuOpen(false)
            }}>
              {category}
            </li>
          ))}
        </ul>
        <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <i class="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
