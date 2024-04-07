import Navbar from "./Navbar";
import Footer from "./Footer";


const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="container homesection">

    <div className="d-flex justify-content-center align-items-center flex-column box">
      <h2 className="pt-2 fw-bolder">Please verify your email...</h2>
      <i className="pt-2 fa-solid fa-envelope messsagebox position-relative z-5" style={{color:"lightgray"}}>
        
        <i
          className="fa-solid fa-circle-check fs-1 position-absolute z-1 checked"
          style={{ top: "25px", right: "-15px" }}
          ></i>
      </i>
      <p className="pt-2 ">
        Please verify your email address. We&#39;ve sent a confirmation email
        to:
      </p>
      <h5 className="pt-2 fw-bolder">account@refero.design</h5>
      <p className="pt-2 ">
        Click the confirmation link in that email to begin using Dribbble
      </p>
      <p className="pt-2 ">
        Didn&#39;t receive the email? Check your Spam folder, it may have been
        caught by a filter. If you Still don&#39;t see it, you can{" "}
        <span>resend the confirmation email.</span>{" "}
      </p>
      <p className="pt-2 ">
        Wrong email address? <span>Change it.</span>
      </p>
    </div>
          </div>

          <Footer/>
          </>
  );
};

export default Home;
