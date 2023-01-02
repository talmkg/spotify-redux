import "./App.css";
import "./album.css";
// import "./album_page/album.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/Homepage";
import MainSearch from "./search_page/MainSearch";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourites from "./search_page/Favourites";
// import Album_page from "./album_page/Album_page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/favourites" element={<Favourites />} /> */}
          <Route path="/search" element={<MainSearch />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
