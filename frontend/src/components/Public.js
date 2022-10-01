import { Link } from "react-router-dom";

const Public = () => {
  const content = (
      <div className="landing-wrapper">
        <div className="landing-btn-wrapper">
            <Link to="/register"><button>Register</button></Link>
            <Link to="/login"><button>Login</button></Link>
        </div>
      </div>
  );
  return content;
};
export default Public;
