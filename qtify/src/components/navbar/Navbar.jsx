import React from "react";
import styles from "./Navbar.module.css"
import Logo from "../logo/Logo";
import SearchBar from "../SearchBar/SearchBar"
import Button from "../button/Button";
const Navbar=()=>{
  return(
    <>
    <nav className={styles.navbar} > 
    <Logo/>
 <SearchBar placeholder="search"/>
  <Button>Give Feedback</Button>
    </nav>
    </>
  )
}
export default Navbar;