import "../componentsScss/Register.scss";

const Register = () => {
  return (
    <div>
      <div>
        <form className="container">
          <div className="">
            <div className="registrationHeader">
              <h2>Registration</h2>
            </div>
            <div className="registrationSection">
              <div className="row">
                <div className="registration-group">
                  <div>
                    <label htmlFor="">Name:</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="registration-group">
                  <div>
                    <label htmlFor="">Secon Name:</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="registration-group">
                  <div>
                    <label htmlFor="">Password:</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="registration-group">
                  <div>
                    <label htmlFor=""></label>
                    <input type="text" />
                  </div>
                </div>
                <div className="registration-group">
                  <div>
                    <label htmlFor=""></label>
                    <input type="text" />
                  </div>
                </div>
                <div className="registration-group">
                  <div>
                    <label htmlFor=""></label>
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
