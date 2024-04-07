// import { Link } from "react-router-dom";
import "./Style.css";

const Signup = () => {
  return (
    <div className=" min-vh-100 min-vw-100 d-flex mains">
      <div className="left height-100 bg-info "></div>
      <div className="rights height-100 maincontainer">
        <div className="container d-flex flex-column justify-content-center ">
          <div>
            <h4 className="fw-bold ">Sign up to Dribbble</h4>
            <p className="mt-4 d-none text-danger">
              <li>Username has already been taken</li>
            </p>
          </div>

          <div className="mt-4 inputs">
          <form action="/profile">
              <div className="d-flex ">
                <div className="m-2 d-flex flex-column">
                  <label htmlFor="name">Name</label>
                  <input
                    className="border border-none "
                    type="text"
                    required
                    placeholder="Enter Name"
                  />
                </div>
                <div className="m-2 d-flex flex-column">
                  <label htmlFor="uname">Username</label>
                  <input
                    className="border border-none "
                    type="text"
                    required
                    placeholder="Enter Username"
                  />
                </div>
              </div>
             
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    required
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    className="form-control"
                    id="password"
                    minLength={6}
                  />
                </div>
              <div className="p-2 w-100 d-flex">
                <input type="checkbox" name="checked" id="checked" required />
                <div>
                  <p className="ml-3">
                    Creating an account means you&apos;re okay with our{" "}
                    <span className="text-primary fw-normal">
                      {" "}
                      Teams of Service, Privacy,
                    </span>{" "}
                    and our default{" "}
                    <span className="text-primary fw-normal">
                      Notification Settings
                    </span>
                  </p>
                </div>
              </div>

              <div className="pt-3">
                {/* <Link to="/profile"> */}
                  
                  <button className=" fs-6 btns text-light">
                    Create Account
                  </button>
                {/* </Link> */}
              </div>

              <div className="privacy">
                <p>
                  The site is protected by reCAPTCHA and the Google
                  <span className="fw-normal text-primary">
                    
                    Privacy Policy
                  </span>
                  and
                  <span className="fw-normal text-primary">
                    Terms of Service
                  </span>
                  apply.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
