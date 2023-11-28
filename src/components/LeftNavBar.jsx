import React from "react";
import { Link } from "react-router-dom";
// import { SearchBar } from './SearchBar'

export const LeftNavBar = () => {

  return (
    <nav>
      <ul>
        <li className="font-bold  font-kanit text-2xl leading-7 ">
          <Link to="/">Inicio</Link>
        </li>
        <li className="font-bold  font-kanit text-2xl leading-7 ">
          <Link to="/review">Review</Link>
        </li>
      </ul>
    </nav>
  );
};
