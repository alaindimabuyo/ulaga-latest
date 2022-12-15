import bgmusic from "../src/assets/bgmusic.mp3";
import { Category } from "./components/Category";
import Questions from "./components/Questions";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import { PageNotFound } from "./pages/404";
import "./App.css";
import { useEffect } from "react";

function App() {
  //const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Router>
      <div className="App">
        <iframe
          src={bgmusic}
          id="bgsound"
          autoplay
          loop
          style={{ display: "none" }}
        />
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/questions/:id" element={<Questions />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
