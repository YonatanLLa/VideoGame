import React from "react";
import {
  PlayStation_4,
  MacOS,
  Xbox_360,
  Nintendo_Switch,
  Pc,
  Linux,
  Android,
  PS_Vista,
  IOS,
} from "../utils/svj.jsx";

export const Card = ({
  name,
  platforms,
  background_image,
  // released,
  // rating,
  // createdVideogame,
  // genres,
}) => {
  const platformIcons = {
    "PlayStation 3": <PlayStation_4 />,
    "PlayStation 4": <PlayStation_4 />,
    "PlayStation 5": <PlayStation_4 />,
    "Xbox 360": <Xbox_360 />,
    "Xbox One": <Xbox_360 />,
    Xbox: <Xbox_360 />,
    "Xbox Series S/X": <Xbox_360 />,
    "Nintendo Switch": <Nintendo_Switch />,
    MacOS: <MacOS />,
    macOS: <MacOS />,
    iOS: <IOS />,
    PC: <Pc />,
    Web: <Pc />,
    "PS Vita": <PS_Vista />,
    Linux: <Linux />,
    Android: <Android />,
  };

  const uniqueWords = new Set();
  const resultPlatforms = platforms.filter((item) => {
    const firstWord = item.split(" ")[0].toLowerCase();
    if (!uniqueWords.has(firstWord)) {
      uniqueWords.add(firstWord);
      return true;
    }
    return false;
  });

  return (
    <div className="flex flex-col rounded-xl overflow-hidden shadow-lg bg-primary mt-6">
      <img
        className="w-full h-48 object-cover"
        src={background_image}
        alt={name}
      />
      <div className="px-4 pt-4 pb-6">
        <ul className="mb-2 flex gap-1">
          {resultPlatforms.map((platform, index) => (
            <li key={index} className="text-gray-700">
              {platformIcons[platform] || platform}
            </li>
          ))}
        </ul>
        <h1 className="font-bold  font-kanit text-2xl leading-7 mb-2 text-white">
          {name}
        </h1>
        {/* favorite */}
        <div className="flex items-center ">
          <div className=" bg-secondary flex items-center gap-2 px-[10px] py-[2px] rounded-[4px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                style={{fill: "white"}}
                viewBox="0 0 512 512"
              >
                <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
              </svg>{" "}
              <span className=" text-[16px]">12</span>
            </div>
          </div>
      </div>
    </div>
  );
};
