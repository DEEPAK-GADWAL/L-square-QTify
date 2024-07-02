import React from "react";
import Hero from "../../components/Hero/Hero";
import { useOutletContext } from "react-router-dom";
import Section from '../../components/section/Section';
import { fetchFilters } from "../../api/api";

const HomePage = () => {
  const { data } = useOutletContext();
  const { newAlbums, topAlbums, songs } = data;
// console.log("data from homePage",data)
  return (
    <>
      <Hero />
      <div className="styles.wrapper">
        <Section title="Top Album" data={topAlbums} type="album" />
        <Section title="New Album" data={newAlbums} type="album" />
        <Section title="Songs" data={songs} filterSource={fetchFilters} type="song" />
      </div>
    </>
  );
};

export default HomePage;
