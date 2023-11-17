import React from "react";
import { useSelector } from "react-redux";
import { Card } from "./Card";

export const Header = () => {
  const { characters } = useSelector((state) => state.character);

  // Dividir el array de personajes en tres partes
  const charactersInColumns = Array.from({ length: 5 }, (_, i) =>
    characters.slice(i * Math.ceil(characters.length / 5), (i + 1) * Math.ceil(characters.length / 5))
  );

  return (
    <section>
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 ">
        {charactersInColumns.map((column, columnIndex) => (
          <div key={columnIndex}>
            {column.map((character, index) => (
              <div key={index} >
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
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};