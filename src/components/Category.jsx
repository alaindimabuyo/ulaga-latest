import React from "react";
import { mainMenu } from "../data/questions";
import { Outlet, Link } from "react-router-dom";
export const Category = () => {
  return (
    <>
      <h1>Game-based Activities in Mathematics Enhance Skills (GAMES)</h1>
      {mainMenu.map((category) => (
        <div className="card">
          <Link to={`questions/${category.id}`}>
            <button onClick={() => {}}>
              <h5 key={category.id}>
                {category.id + 1}. {category.category}
              </h5>
            </button>
          </Link>
        </div>
      ))}
    </>
  );
};
