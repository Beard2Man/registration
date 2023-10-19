import { useState } from "react";
import "../componentsScss/Register.scss";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import validator from "validator";

const Register = () => {
  const [id, idchange] = useState("");
  const [secondname, secondnamechange] = useState("");
  const [password, passwordchange] = useState("");
  const [email, emailchange] = useState("");
  const [gender, genderchange] = useState("");

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  const [isPasswordStrong, setIsPasswordStron] = useState("");

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "Enter the value in";
    if (id === null || id === "") {
      isproceed = false;
      errormessage += "Username";
    }
    if (!isproceed) {
      toast.warning(errormessage);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      } else {
        isproceed = false;
        toast.warning("Please enter the valid email");
      }
    }

    return isproceed;
  };
  const validatePassword = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        minUppercase: 1,
      })
    ) {
      setErrorMessage("Is Stron Password");
      setMessageColor("green");
      setIsPasswordStron(true);
    } else {
      setErrorMessage("Is Not Stron Password");
      setMessageColor("red");
      setIsPasswordStron(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (IsValidate() && isPasswordStrong) {
      let regobj = { id, secondname, password, email, gender };
      console.log(regobj);

      fetch(" http://localhost:8000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(regobj),
      })
        .then((res) => {
          toast.success("Registered successfully.");
          navigate("/login");
        })
        .catch((err) => {
          toast.error("Failed:" + err.message);
        });
    } else if (!isPasswordStrong) {
      toast.warning("Password is not strong enough");
    }
  };

  return (
    <div>
      <div>
        <form className="container" onSubmit={handleSubmit}>
          <div className="">
            <div className="registrationHeader">
              <h2>Registration</h2>
            </div>
            <div className="registrationSection">
              <div className="row">
                <div className="registration-group">
                  <div>
                    <label>
                      User Name:<span className="star">*</span>
                      <input
                        value={id}
                        onChange={(e) => idchange(e.target.value)}
                      ></input>
                    </label>
                  </div>
                </div>
                <div className="registration-group">
                  <div>
                    <label>
                      Secon Name:<span className="star">*</span>
                      <input
                        value={secondname}
                        onChange={(e) => {
                          secondnamechange(e.target.value);
                        }}
                      ></input>
                    </label>
                  </div>
                </div>
                <div className="registration-group">
                  <div>
                    <label>
                      Password:<span className="star">*</span>
                      <input
                        value={password}
                        onChange={(e) => {
                          passwordchange(e.target.value);
                          validatePassword(e.target.value);
                        }}
                      ></input>
                      <p className="message" style={{ color: messageColor }}>
                        {" "}
                        {errorMessage === "" ? null : (
                          <span>{errorMessage}</span>
                        )}
                      </p>
                    </label>
                  </div>
                </div>
                <div className="registration-group">
                  <div>
                    <label>
                      Email:<span className="star">*</span>
                      <input
                        value={email}
                        onChange={(e) => {
                          emailchange(e.target.value);
                        }}
                      ></input>
                    </label>
                  </div>
                </div>
                <div className="registration-group">
                  <div>
                    <label>Gender:</label>
                    <br />
                    <label>
                      Male
                      <input
                        checked={gender === "male"}
                        onChange={(e) => genderchange(e.target.value)}
                        type="radio"
                        name="gender"
                        value="male"
                        className="gender-group"
                      ></input>
                    </label>

                    <label>
                      Female
                      <input
                        onChange={(e) => genderchange(e.target.value)}
                        checked={gender === "female"}
                        type="radio"
                        name="gender"
                        value="female"
                        className="gender-group"
                      ></input>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <button type="submit">Register</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
