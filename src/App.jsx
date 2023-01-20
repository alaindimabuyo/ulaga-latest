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

const audio = new Audio();

// set the source of the audio file
audio.src = bgmusic;

// set the loop and autoplay properties to true
audio.loop = true;
audio.autoplay = true;

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Category />}
          />
          <Route
            path="/questions/:id"
            element={<Questions />}
          />
          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
