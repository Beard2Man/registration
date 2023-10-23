import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>Home</div>
      <div className="homeNavi">
        <div className="links">
          <Link className="btnNewUser" to={"/login"}>
            Login
          </Link>
        </div>
        <div className="links">
          <Link className="btnNewUser" to={"/register"}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
