import { useEffect, useState } from "react";
import Song_tile from "./Song_tile";
import React from "react";
import Artist_tile from "./Artist_tile";
import Podcast_tile from "./Podcast_tile";
import Sidebar from "./Sidebar";
import Player from "./Player";
import Navbar from "./Navbar";
const Homepage = () => {
  const [songs, setSongs] = useState();
  const [artists, setArtists] = useState();
  const [podcasts, setPodcasts] = useState();

  React.useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=neffex")
      .then((res) => res.json())
      .then((json) => {
        setSongs(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("An error occured, try again later.");
      });
  }, []);
  React.useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=hip-hop")
      .then((res) => res.json())
      .then((json) => {
        setArtists(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("An error occured, try again later.");
      });
  }, []);
  React.useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=podcast")
      .then((res) => res.json())
      .then((json) => {
        setPodcasts(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("An error occured, try again later.");
      });
  }, []);
  console.log(podcasts);
  return (
    <>
      <Sidebar />
      <main class="body">
        <Navbar />
        <div class="margin-top">
          <h3 class="greeting mb-3">Good morning</h3>
        </div>
        <div>
          <div
            class="row row-cols-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 g-xl-2 g-xxl-3"
            id="topsidecards"
          >
            {songs?.slice(0, 10).map((obj, index) => (
              <Song_tile key={index} {...obj} cover={obj.album.cover_xl} /> //if all the names match (Local variables = API, then we can just use {...obj} instead of declaring each prop like first_name={first_name} etc)
            ))}
          </div>
        </div>
        <h3 class="greeting mb-3 mt-3">Recently Played</h3>

        <div class="container-fluid">
          <div class="row row-cols-7 g-3" id="midsidecards">
            {artists?.slice(0, 6).map((obj) => (
              <Artist_tile key={obj.id} {...obj} cover={obj.album.cover_xl} /> //if all the names match (Local variables = API, then we can just use {...obj} instead of declaring each prop like first_name={first_name} etc)
            ))}
          </div>
        </div>

        <div class="margin-top">
          <span>
            <h3 class="greeting mb-1 mt-3">Shows to try</h3>
            <p class="text-muted">Podcasts we think you'll get hooked on.</p>
          </span>
          <div>
            <div class="container-fluid">
              <div
                class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-6 g-4"
                id="bottomsiderow"
              >
                {" "}
                {podcasts?.slice(0, 6).map((obj) => (
                  <Podcast_tile
                    key={obj.id}
                    {...obj}
                    cover={obj.album.cover_xl}
                  /> //if all the names match (Local variables = API, then we can just use {...obj} instead of declaring each prop like first_name={first_name} etc)
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Player />
    </>
  );
};
export default Homepage;
//
