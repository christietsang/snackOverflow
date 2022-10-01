import { Link } from "react-router-dom";

import {
  landingWrapperStyle,
  btnWrapperStyle,
  btnStyle
} from "../styles/landingPageStyle";

const Public = () => {
  const content = (
    <div className={landingWrapperStyle}>
      <div className={btnWrapperStyle}>
        <Link to="/register">
          <button className={btnStyle}>Register</button>
        </Link>
        <Link to="/login">
          <button className={btnStyle}>Login</button>
        </Link>
      </div>
    </div>
  );
  return content;
};
export default Public;
