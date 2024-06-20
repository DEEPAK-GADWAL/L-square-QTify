import React from "react";
import logo from "../../assets/logo.png"; // Ensure the correct file extension
import styles from "../logo/Logo.module.css"
const Logo = () => {
  return (
    <>
      <img className={styles.logo} src={logo} alt="Logo" />
    </>
  );
};

export default Logo;
