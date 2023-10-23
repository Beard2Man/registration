import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [username, usernameupdate] = useState("");
  const [password, passwordupdate] = useState("");

  const usenavigate = useNavigate();

  const LoginProcess = (e) => {
    e.preventDefault();
    if (validate()) {
      fetch("http://localhost:8000/user/" + username)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          console.log(resp);
          if (Object.keys(resp).length === 0) {
            toast.error("Enter valid username");
          } else {
            if (resp.password === password) {
              toast.success("Success");
              usenavigate("/");
            } else {
              toast.error("Enter valid password");
            }
          }
        })
        .catch((err) => {
          toast.error("Login Failed :" + err.message);
        });
    }
  };
  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Please Enter Username");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  };

  return (
    <div>
      <div>
        <form onSubmit={LoginProcess} className="container">
          <div>
            <div>Login</div>
            <div className="login-body">
              <div className="login-group">
                <label>
                  User Name :<span className="star">*</span>
                  <input
                    value={username}
                    onChange={(e) => usernameupdate(e.target.value)}
                  ></input>
                </label>
              </div>
              <div className="login-group">
                <label>
                  Password :<span className="star">*</span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => passwordupdate(e.target.value)}
                  ></input>
                </label>
              </div>
            </div>
            <div>
              <button className="" type="submit">
                Login
              </button>

              <div className="loginNav">
                <div>
                  {" "}
                  <Link className="btnNewUser" to={"/"}>
                    Home
                  </Link>
                </div>
                <div>
                  {" "}
                  <Link className="btnNewUser" to={"/register"}>
                    New User
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
