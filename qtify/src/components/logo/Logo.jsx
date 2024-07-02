import React from "react";
import logo from "../../assets/logo.png"; 
import styles from "../logo/Logo.module.css"
import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <>
    <Link to={'/'}>
      <img className={styles.logo} src={logo} alt="Logo" />
    </Link>
    </>
  );
};

export default Logo;
