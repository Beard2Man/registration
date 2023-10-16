import { useState } from "react";
import "../componentsScss/Register.scss";
import { toast } from "react-toastify";

const Register = () => {
  const [id, idchange] = useState("");
  const [secondname, secondnamechange] = useState("");
  const [password, passwordchange] = useState("");
  const [email, emailchange] = useState("");
  const [gender, genderchange] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
        console.log(res);
        toast.success("Registered successfully.");
      })
      .catch((err) => {
        toast.error("Failed:" + err.message);
      });
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
                        onChange={(e) => secondnamechange(e.target.value)}
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
                        onChange={(e) => passwordchange(e.target.value)}
                      ></input>
                    </label>
                  </div>
                </div>
                <div className="registration-group">
                  <div>
                    <label>
                      Email:<span className="star">*</span>
                      <input
                        value={email}
                        onChange={(e) => emailchange(e.target.value)}
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
