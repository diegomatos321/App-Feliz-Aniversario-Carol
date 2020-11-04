import { useContext } from "react";
import { Link } from "react-router-dom";
import {AppContext} from "../utils/AppContext.js"

import "../css/footer.css"

const Navigation = () => {
  const {isFooterEnable, nextPage} = useContext(AppContext)

  return (
    <footer>
      <nav className="navigation">
        <ul>
        <Link to={nextPage}>
          <li >
              <button className="button" disabled={!isFooterEnable}>Continuar</button>
          </li>
        </Link>
        </ul>
      </nav>
    </footer>
  );
};

export default Navigation;
