import React from "react";
import { useSelector } from "react-redux";
import { Card } from "./Card"

export const Header = () => {
  const { characters } = useSelector((state) => state.character);
  return (
    <div className="grid grid-cols-3 gap-4">
      {characters?.map((character, index) => {
        return (
          <div key={index}>
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
        );
      })}
    </div>
  );
};
