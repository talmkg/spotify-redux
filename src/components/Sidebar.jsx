import ReactDOM from "react-dom";
import {
  Spotify,
  House,
  Search,
  Bookmark,
  Heart,
  Download,
} from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar-custom d-none d-lg-block d-xl-block d-xxl-block">
      <ul className="navbar-nav">
        <li className="nav-item my-3">
          <div className="text-light heading d-flex align-items-center justify-content-flex-start mt-3">
            <div className="d-flex align-items-center ">
              <div className=" mx-3 me-2">
                <Spotify color="white" size={45} />
              </div>
              <div>Spotify</div>
            </div>
          </div>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className="btn w-100 h-50 py-md-2 text-light button-hover text-left d-flex align-items-center justify-content-around"
          >
            <House color="white" size={20} />
            <div className="w-75 d-flex">
              <Link to="/" id="link-decoration">
                Home
              </Link>
            </div>
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className="btn w-100 h-50 py-md-2 text-light button-hover text-left d-flex align-items-center justify-content-around"
          >
            <Search color="white" size={20} />

            <div className="w-75 d-flex">
              <Link to={"/Search/"} id="no-deco">
                Search{" "}
              </Link>
            </div>
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className="btn w-100 h-50 py-md-2 text-light button-hover text-left d-flex align-items-center justify-content-around"
          >
            <Bookmark color="white" size={20} />
            <div className="w-75 d-flex">Your Library</div>
          </button>
        </li>
        <li className="nav-item margin-top">
          <button
            type="button"
            className="btn w-100 h-50 py-md-2 text-light button-hover text-left d-flex align-items-center justify-content-around"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              class="bi bi-plus-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
            </svg>
            <div className="w-75 d-flex">Create Playlist</div>
          </button>
        </li>
        <li className="nav-item">
          <button
            type="button"
            className="btn w-100 h-50 py-md-2 text-light button-hover text-left d-flex align-items-center justify-content-around"
          >
            <Heart
              color="white"
              size={25}
              className=" p-1"
              id="gradient-liked-songs"
            />
            <div
              className="w-75 d-flex"
              onClick={() => navigate("/favourites")}
            >
              Liked Songs
            </div>
          </button>
        </li>
      </ul>
      <div className="allplaylists mt-2">
        <ul>
          <a>
            <li className="nav-item-playlists">Random Blues Jazz</li>
          </a>
          <a>
            <li className="nav-item-playlists">Random Rock Jojo jojo</li>
          </a>
          <a>
            <li className="nav-item-playlists">Random Idk idk idk</li>
          </a>
          <a>
            <li className="nav-item-playlists">Random blablasbla</li>
          </a>
          <a>
            <li className="nav-item-playlists">
              Random blablasbla <i className="fa-solid fa-user-group"></i>
            </li>
          </a>
          <a>
            <li className="nav-item-playlists">Random blablasbla</li>
          </a>
          <a>
            <li className="nav-item-playlists">Random blablasbla</li>
          </a>
          <a>
            <li className="nav-item-playlists">
              Random blablasbla <i className="fa-solid fa-user-group"></i>
            </li>
          </a>
          <a>
            <li className="nav-item-playlists">Random blablasbla</li>
          </a>
          <a>
            <li className="nav-item-playlists">Random Blues Jazz</li>
          </a>
          <a>
            <li className="nav-item-playlists">Random Rock Jojo jojo</li>
          </a>
          <a>
            <li className="nav-item-playlists">Random Idk idk idk</li>
          </a>
          <a>
            <li className="nav-item-playlists">Random blablasbla</li>
          </a>
          <a>
            <li className="nav-item-playlists">
              Random blablasbla <i className="fa-solid fa-user-group"></i>
            </li>
          </a>
          <a>
            <li className="nav-item-playlists">Random blablasbla</li>
          </a>
          <a>
            <li className="nav-item-playlists">Random blablasbla</li>
          </a>
          <a>
            <li className="nav-item-playlists">
              Random blablasbla <i className="fa-solid fa-user-group"></i>
            </li>
          </a>
          <a>
            <li className="nav-item-playlists">Random blablasbla</li>
          </a>
          <a>
            <li className="nav-item-playlists">Random Blues Jazz</li>
          </a>
          <a>
            <li className="nav-item-playlists">Random Rock Jojo jojo</li>
          </a>
          <a>
            <li className="nav-item-playlists">Random Idk idk idk</li>
          </a>
          <a>
            <li className="nav-item-playlists">Random blablasbla</li>
          </a>
          <a>
            <li className="nav-item-playlists">
              Random blablasbla <i className="fa-solid fa-user-group"></i>
            </li>
          </a>
          <a>
            <li className="nav-item-playlists">Random blablasbla</li>
          </a>
          <a>
            <li className="nav-item-playlists">Random blablasbla</li>
          </a>
          <a>
            <li className="nav-item-playlists">
              Random blablasbla <i className="fa-solid fa-user-group"></i>
            </li>
          </a>
          <a>
            <li className="nav-item-playlists">Random blablasbla</li>
          </a>
        </ul>
      </div>
      <div>
        <div className="d-flex align-items-center    mt-4 m-3 download">
          <div className="me-2">
            <Download color="white" size={20} />
          </div>
          <div>Install App</div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
