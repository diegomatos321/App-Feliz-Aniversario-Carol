import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ isDisable, to }) => {
  let classe = isDisable ? "button disable" : "button";
  return (
    <footer>
      <nav className="navigation">
        <ul>
          <li className={classe}>
            <Link to={`${process.env.PUBLIC_URL}${to}`}>Continuar</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Navigation;
