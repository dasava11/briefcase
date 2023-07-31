import React from "react";
import CarouselProject from "../CarouselProject/CarouselProject";
import img1 from "./images/Bg01.png";
import img2 from "./images/Bg02.png";
import img3 from "./images/Bg03.png";
import img4 from "./images/Bg04.png";
import img5 from "./images/Rm01.png";
import img6 from "./images/Rm02.png";
import img7 from "./images/Rm03.png";
import img8 from "./images/dogs01.png";
import img9 from "./images/dogs02.png";

const Works = () => {
  const boardGames = [img1, img2, img3, img4];
  const dogsApp = [img8, img9];
  const rickMorty = [img5, img6, img7];

  const gitGames = "https://github.com/dasava11/front_project_board_games";
  const gitRick = "https://github.com/dasava11/proyectoIntegrador";
  const gitDogs = "https://github.com/dasava11/pindividual_front";
  return (
    <div>
      <h1 className="text-1xl font-bold tracking-tight text-gray-900 sm:text-3xl mt-5">
        Proyectos
      </h1>
      <div className="flex mt-5">
        <CarouselProject
          className="w-1/3"
          carousel={boardGames}
          repo={gitGames}
        />
        <CarouselProject
          className="w-1/3"
          carousel={rickMorty}
          repo={gitRick}
        />
        <CarouselProject className="w-1/3" carousel={dogsApp} repo={gitDogs} />
      </div>
    </div>
  );
};

export default Works;
