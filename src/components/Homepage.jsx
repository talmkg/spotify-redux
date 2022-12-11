import { useEffect, useState } from "react";
import Song_tile from "./Song_tile";
import React from "react";
import Artist_tile from "./Artist_tile";
import Podcast_tile from "./Podcast_tile";
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

      <div class="container-fluid playBar d-flex justify-content-between align-items-center fixed-bottom">
        <div class="playbar d-flex align-items-center">
          <img
            class="albumImg img-fluid lilAlb m-2"
            src="https://glastonbury.davidbowie.com/images/album_cover.png"
          />
          <div class="justify-content-between">
            <h6>Absolute Beginners</h6>
            <p>David Bowie</p>
          </div>
          <div class="justify-content-between px-4 py-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21C11.355 20.428 10.626 19.833 9.85502 19.2H9.84502C7.13002 16.98 4.05302 14.468 2.69402 11.458C2.24754 10.4997 2.01093 9.45712 2.00001 8.4C1.99703 6.94948 2.57879 5.55898 3.61383 4.54276C4.64887 3.52654 6.04981 2.97039 7.50002 3C8.68065 3.00186 9.83586 3.34308 10.828 3.983C11.264 4.26596 11.6584 4.60825 12 5C12.3435 4.60979 12.7381 4.2677 13.173 3.983C14.1648 3.34295 15.3197 3.00171 16.5 3C17.9502 2.97039 19.3512 3.52654 20.3862 4.54276C21.4213 5.55898 22.003 6.94948 22 8.4C21.9898 9.45881 21.7532 10.5032 21.306 11.463C19.947 14.473 16.871 16.984 14.156 19.2L14.146 19.208C13.374 19.837 12.646 20.432 12.001 21.008L12 21ZM7.50002 5C6.56853 4.98834 5.6701 5.34484 5.00002 5.992C4.35441 6.62616 3.99358 7.49504 3.99994 8.4C4.01135 9.1705 4.18585 9.92985 4.51202 10.628C5.15353 11.9267 6.01913 13.102 7.06902 14.1C8.06002 15.1 9.20002 16.068 10.186 16.882C10.459 17.107 10.737 17.334 11.015 17.561L11.19 17.704C11.457 17.922 11.733 18.148 12 18.37L12.013 18.358L12.019 18.353H12.025L12.034 18.346H12.039H12.044L12.062 18.331L12.103 18.298L12.11 18.292L12.121 18.284H12.127L12.136 18.276L12.8 17.731L12.974 17.588C13.255 17.359 13.533 17.132 13.806 16.907C14.792 16.093 15.933 15.126 16.924 14.121C17.9741 13.1236 18.8397 11.9485 19.481 10.65C19.8131 9.9458 19.9901 9.1785 20.0001 8.4C20.0042 7.49783 19.6435 6.63229 19 6C18.3312 5.34992 17.4326 4.99048 16.5 5C15.3619 4.99032 14.274 5.46736 13.51 6.311L12 8.051L10.49 6.311C9.72609 5.46736 8.6381 4.99032 7.50002 5Z"
                fill="#f5f5f5"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-folder-minus mx-4"
              viewBox="0 0 16 16"
            >
              <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z" />
              <path d="M11 11.5a.5.5 0 0 1 .5-.5h4a.5.5 0 1 1 0 1h-4a.5.5 0 0 1-.5-.5z" />
            </svg>
          </div>
        </div>

        <div class="align-items-center play">
          <div class="d-flex justify-content-center">
            <div class="playbar">
              <svg
                class="mx-2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 20H14.5L16.549 17.95L13.42 14.82L14.83 13.41L17.96 16.539L20 14.5V20ZM5.41 20L4 18.59L16.54 6.04L14.5 4H20V9.5L17.96 7.46L5.411 20H5.41ZM9.17 10.58L4 5.41L5.41 4L10.59 9.17L9.17 10.579V10.58Z"
                  fill="#F5F5F5"
                ></path>
              </svg>
              <svg
                class="mx-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 18L9.5 12L18 6V18ZM8 18H6V6H8V18Z"
                  fill="#F5F5F5"
                ></path>
              </svg>
              <svg
                class="mx-2"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C6.47967 21.994 2.00606 17.5204 2 12V11.8C2.10993 6.30455 6.63459 1.92797 12.1307 2.0009C17.6268 2.07382 22.0337 6.5689 21.9978 12.0654C21.9619 17.5618 17.4966 21.9989 12 22ZM10 7.50002V16.5L16 12L10 7.50002Z"
                  fill="#F5F5F5"
                ></path>
              </svg>

              <svg
                class="mx-2"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 18H16V6H18V18ZM6 18V6L14.5 12L6 18Z"
                  fill="#F5F5F5"
                ></path>
              </svg>
              <svg
                class="mx-2"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 22L3 18L7 14V17H17V13H19V18C19 18.5523 18.5523 19 18 19H7V22ZM7 11H5V6C5 5.44772 5.44772 5 6 5H17V2L21 6L17 10V7H7V11Z"
                  fill="#F5F5F5"
                ></path>
              </svg>
            </div>
          </div>

          <div class="playbar align-items-center justify-content-space-between d-flex px-2 m-0 position-relative">
            <span>xxx</span>
            <hr class="playbarline" />
            <span>xxx</span>
          </div>
        </div>

        <div class="playbar align-items-center justify-content-space-between d-flex px-2 m-0 position-relative">
          <span>
            <svg
              class="mx-1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </span>
          <span>
            <svg
              class="mx-1"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-speaker"
              viewBox="0 0 16 16"
            >
              <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
              <path d="M8 4.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5zM8 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-3.5 1.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
            </svg>
          </span>
          <span>
            <svg
              class="mx-1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-volume-down"
              viewBox="0 0 16 16"
            >
              <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zM6.312 6.39 8 5.04v5.92L6.312 9.61A.5.5 0 0 0 6 9.5H4v-3h2a.5.5 0 0 0 .312-.11zM12.025 8a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z" />
            </svg>
          </span>
          <hr class="volumebarline" />
        </div>
      </div>
    </>
  );
};
export default Homepage;
//
