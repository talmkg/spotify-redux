import "./App.css";
import "./album.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/Homepage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Homepage />
    </div>
  );
}

export default App;
