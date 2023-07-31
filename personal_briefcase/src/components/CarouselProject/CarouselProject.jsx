import React, { useEffect, useState } from "react";
import arrowBack from "../../Photos/icons-back.png";
import arrowNext from "../../Photos/icons-next.png";
import styles from "./carouselProject.module.css";
import { NavLink } from "react-router-dom";

const CarouselProject = ({ carousel, repo }) => {
  let carouselProjects = carousel;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timerId = setTimeout(() => {
      if (index === carouselProjects.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
      timerId = null;
    }, 3000);
    return () => clearTimeout(timerId);
  });

  const handleClick = (event) => {
    let push = event.target.alt;

    if (push === "go") {
      if (index === carouselProjects.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }

    if (push === "back") {
      if (index === 0) {
        setIndex(carouselProjects.length - 1);
      } else {
        setIndex(index - 1);
      }
    }
  };

  return (
    <div className={styles.carouselDetailGame}>
      <div className={styles.carouselDetail}>
        <button className={styles.carButnLft}>
          <img src={arrowBack} alt="back" onClick={handleClick} />
        </button>
        <button className={styles.carButnRig}>
          <img src={arrowNext} alt="go" onClick={handleClick} />
        </button>
        <img
          className={styles.imageCorouselGame}
          src={carouselProjects[index]}
          alt={`imagen ${[index]}`}
        />
      </div>
      <NavLink className="mt-3 text-black hover:text-blue" to={repo}>
        ir a proyecto
      </NavLink>
    </div>
  );
};

export default CarouselProject;
