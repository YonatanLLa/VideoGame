import React from "react";
import { useSelector } from "react-redux";
import { Card } from "./Card";

export const Header = () => {
  const { characters } = useSelector((state) => state.character);

  return (
    <section>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 ">
        {characters.length? characters.map((character, columnIndex) => (
          <div key={columnIndex}>
              <div key={columnIndex} >
                <Card
                  id={character.id}
                  name={character.name}
                  platforms={character.platforms}
                  background_image={character.background_image}
                  released={character.released}
                  rating={character.rating}
                  createdVideogame={character.created}
                  genres={character.genres}
                />
              </div>
          </div>
        )) : <p>Holaaa</p>}
      </div>
    </section>
  );
};