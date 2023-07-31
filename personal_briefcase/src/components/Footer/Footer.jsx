import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const facebook = "https://www.facebook.com/david.sanchez.9634";
const github = "https://github.com/dasava11";
const linkdin =
  "https://www.linkedin.com/in/david-s%C3%A1nchez-vargas-66443593/";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <Link to={facebook}>
        <img
          className="h-12 my-3"
          src="https://img.icons8.com/color/96/facebook.png"
          alt="facebook"
        />
      </Link>
      <Link to={github}>
        <img
          className="h-12 my-3"
          src="https://img.icons8.com/sf-black-filled/128/github.png"
          alt="facebook"
        />
      </Link>
      <Link to={linkdin}>
        <img
          className="h-12 my-3"
          src="https://img.icons8.com/fluency/144/linkedin.png"
          alt="facebook"
        />
      </Link>
    </div>
  );
};

export default Footer;
