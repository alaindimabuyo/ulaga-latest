import React from "react";
import { mainMenu } from "../data/questions";
import { Outlet, Link } from "react-router-dom";
export const Category = () => {
  return (
    <>
      <h1>
        GAMIFIED ACTIVITIES in MATHEMATICS to ENHANCE STUDENTS interest (GAMES)
      </h1>
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
      <h3 className="footer">Proponent: Clarissa Abarquez</h3>
    </>
  );
};
