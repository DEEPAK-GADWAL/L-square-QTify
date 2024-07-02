import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import { StyledEngineProvider } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import { fetchNewAlbum, fetchTopAlbum, fetchSongs } from './api/api';

function App() {

  // Declare the state at the top level
  const [data, setData] = useState({
    topAlbums: [],
    newAlbums: [],
    songs: []
  });
  // Define the generateData function
  const generateData = async (key, source) => {
    try {
      const fetchedData = await source();
      setData((prevState) => ({
        ...prevState,
        [key]: fetchedData
      }));
    } catch (e) {
      console.log("error fetching data", e);
    }
  };

  // Use the useEffect hook to fetch data
  useEffect(() => {
    generateData("topAlbums", fetchTopAlbum);
    generateData("newAlbums", fetchNewAlbum);
    generateData("songs", fetchSongs);
  }, []);

  // Destructure the state
  const { topAlbums, newAlbums, songs } = data;
  

  return (
    <div style={{ backgroundColor: "#121212" }}>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <Outlet context={{ data: { topAlbums, newAlbums, songs } }} />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
