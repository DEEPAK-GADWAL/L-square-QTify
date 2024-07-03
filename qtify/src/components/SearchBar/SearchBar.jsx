import React, { useState } from "react";
import styles from "../SearchBar/SearchBar.module.css";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchBtn = (e) => {
    e.preventDefault();
    console.log(`search value ${searchValue}`);
  };

  return (
    <form className={styles.wrapper}>
      <div>
        <input
          type="search"
          placeholder="search"
          className={styles.input}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div>
        <button className={styles.searchButton} type="submit" onClick={handleSearchBtn}>
          <SearchIcon className="searchBtn" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
