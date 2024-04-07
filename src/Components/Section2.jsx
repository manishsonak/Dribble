import DribbbleLogo from "./DribbbleLogo";
import '../Components/Style.css';
import Cards from "./Cards";
import { Link } from "react-router-dom";
import "./Style.css";
// import { useState } from "react";

const Section2 = () => {




    
  return (
    <div className="container w-100 h-100 d-flex ">
        
      <div className="section_dribble" style={{width:"100px"}}>
        <DribbbleLogo />
      </div>
      <div className="container mt-4 text-black w-75 d-flex flex-column justify-content-evenly position-relative">
        <div className="text-center">
        <div className=" btn position-absolute arrowicon" style={{top:"0px", left:"-10px", backgroundColor:"rgba(219, 219, 219, 0.853)"}} >
        <a href="/profile">  <i className="text-black fa-solid fa-chevron-left "></i> </a>
        </div>
            <h2 className="fw-bold ">What brings you to Dribbble?</h2>
            <p className="fs-6 fw-normal text-secondary-emphasis">Select the options that best describe you. Dont worry, you can explore other options later.</p>
        </div>
        <div className="mt-3 mb-3 d-flex responsive"style={{gap:"2rem",}} >
            <Cards  key={"1"} image={"https://www.executivegrapevine.com/uploads/articles/story-missed-office-pandemic.jpg"} content={"I'm a designer looking to share my work"} />
            <Cards key={"2"} image={"https://media.istockphoto.com/id/1487389484/photo/creative-front-end-developer-brainstorming-ui-design-scrutinize.webp?b=1&s=170667a&w=0&k=20&c=q3oc5XJBuCqVeLYr9nIvUyhv_94PpXz49hVacnr__qg="} content={"I'm looking to hire a designer"} />
            <Cards key={"3"} image={"https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRlc2lnbmVyJTIwaW5zcGlyYXRpb258ZW58MHx8MHx8fDA%3D"} content={"I'm looking for design inspiration"}/>
        </div>
        <div className="d-flex justify-content-center " >
        <Link className=" btns w-25 text-light"  to="/home" > <button 
             className="text-center btns w-100 btn fs-5"   
            
             >Finish</button> </Link>
        </div>
      </div>
    </div>
  );
};

export default Section2;
