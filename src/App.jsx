import { useState } from "react";
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

function App() {
  return (
    <Router>
      <div className="App">
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
