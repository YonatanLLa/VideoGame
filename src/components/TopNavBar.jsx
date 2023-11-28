import React from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { Profile } from "./Profile";

export const TopNavBar = () => {
  return (
    <nav className="w-full py-6 ">
      <ul className="flex justify-between items-center">
        {/* logo */}
        <li className="px-4 pl-0">
          <Link to="/">
            <h1 className=" font-bold text-lg">LOGO</h1>
          </Link>
        </li>
        <li className="w-full px-4 pl-0">
          <SearchBar />
        </li>
        <div className="flex px-4 pr-0">
          <li className="w-full mr-4">
            <Profile />
          </li>
          <li className="flex items-center ">
            <Link to="/form">
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-plus"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </Link>
          </li>
        </div>

        {/* <li><Link to="/favorite">Favorito</Link></li> */}
      </ul>
    </nav>
  );
};
