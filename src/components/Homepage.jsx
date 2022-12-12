import { useEffect, useState } from "react";
import Song_tile from "./Song_tile";
import React from "react";
import Artist_tile from "./Artist_tile";
import Podcast_tile from "./Podcast_tile";
import Sidebar from "./Sidebar";
import Player from "./Player";
const Homepage = () => {
  const [songs, setSongs] = useState();
  const [artists, setArtists] = useState();
  const [podcasts, setPodcasts] = useState();

  React.useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
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
        <nav class="navbar sticky-top mb-3">
          <div class="d-flex align-items-center justify-content-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-chevron-left chevrons"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20    "
              fill="currentColor"
              class="bi bi-chevron-right chevrons"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>

          <div class="d-flex align-items-center">
            <div>
              <button
                type="button"
                class="btn btn-outline-white text-light border-radius me-2"
              >
                Upgrade
              </button>
            </div>
            <div class="dropdown">
              <button
                class="btn btn-dark dropdown-toggle border-radius"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://i.pinimg.com/564x/08/35/96/083596835424340eda90439fd20e5ee9.jpg"
                  id="nav-image"
                />
                &nbsp;&nbsp;Gh0stxt&nbsp;&nbsp;
              </button>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a class="dropdown-item" href="./Login/login.html">
                    Log out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="margin-top">
          <h3 class="greeting mb-3">Good morning</h3>
        </div>
        <div>
          <div
            class="row row-cols-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 g-xl-2 g-xxl-3"
            id="topsidecards"
          >
            {songs?.slice(0, 10).map((obj) => (
              <Song_tile key={obj.id} {...obj} cover={obj.album.cover_xl} /> //if all the names match (Local variables = API, then we can just use {...obj} instead of declaring each prop like first_name={first_name} etc)
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
