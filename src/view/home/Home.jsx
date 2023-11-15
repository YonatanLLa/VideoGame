import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCharacters } from "../../redux/actions/characterActions";
import { Header } from "../../components/Header";
import { LeftSideBar } from "../leftSideBar/LeftSideBar.jsx";

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCharacters());
  }, [dispatch]);
  return (
    <div className="flex">
      <div>
        <LeftSideBar />
      </div>
      <main>
        <div>
          <h1>New and trending Based on player counts and release date</h1>
        </div>
        <div>
          <div className="flex justify-between">
            <section>Filtroo</section>
            <section>Cambio de forma</section>
          </div>
          <div className="flex justify-center">
            <Header />
          </div>
        </div>
      </main>
    </div>
  );
};
