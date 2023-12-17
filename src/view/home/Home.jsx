import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCharacters, getAllCharactersById } from "../../redux/actions/characterActions";
import { Header } from "../../components/CardHeader";
// import { LeftSideBar } from "../leftSideBar/LeftSideBar.jsx";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const location = useLocation();
  console.log(location);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCharacters());
  }, [dispatch]);
  return (
    <div >
      {/* <div className="sticky top-0">
        {location.pathname !== "" && <LeftSideBar />}
      </div> */}
      <main className="flex flex-col flex-grow w-full">
        <div>
          <h1>New and trending Based on player counts and release date</h1>
        </div>
        <div>
          <div className="flex justify-between">
            <section>Filtroo</section>
            <section>Cambio de forma</section>
          </div>
          <div className="max-w-[1920px] ">
            <Header />
          </div>
        </div>
      </main>
    </div>
  );
};
