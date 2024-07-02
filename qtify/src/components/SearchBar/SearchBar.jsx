import React, { useRef } from "react";
import styles from "../SearchBar/SearchBar.module.css"
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = () => {
  const inputRef = useRef(null);

  const handleMouseOver = () => {
    inputRef.current.focus();
  };

  const handleMouseOut = () => {
    inputRef.current.blur();
  };

  const handleSearchBtn=(e)=>{
    e.preventDefault()
    const val =inputRef.current.value
    
    console.log(`search value ${val}`)
  }
  return (
  <form className={styles.wrapper}>


<div>
    <input
      ref={inputRef}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      type="search"
      placeholder="Search an song of your choice"
    className={styles.input}
    />
</div>
<div>
  <button className={styles.searchButton} type="submit">
   <SearchIcon onClick={handleSearchBtn} className="searchBtn"/>
  </button>
</div>
  </form>
  );
};

export default SearchBar;
