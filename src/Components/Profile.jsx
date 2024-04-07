import { useRef, useState } from "react";
import DribbbleLogo from "./DribbbleLogo";
import './Style.css'

export const Profile = () => {

  const [Image, setImage]=useState("")  //https://tse3.mm.bing.net/th?id=OIP.Z5BlhFYs_ga1fZnBWkcKjQHaHz&pid=15.1

  const  profilePicture = useRef();

  const onChangeProfile=()=>{
    profilePicture.current.click();
  }
  const DeleteImage=()=>{
      setImage("");
  }
  const handleImageUpload=(e)=>{


    setImage(e.target.files[0]);

    // console.log(URL.createObjectURL(Image));

  }
  

 

  return (
    <div className="overflow-scroll contaienr boxes d-flex justify-content-around scrool">
        <div className="section_dribble">
            <DribbbleLogo/>
        </div>

    <div
      className="container d-flex flex-column justify-content-around"
      style={{ gap: "4px" }}
      >
      <div>
        <h2 className="fw-bold">Welcome! Let&apos;s create your profile</h2>
        <p className="text-secondary">
          Let others get to know you better! You can do these later
        </p>
      </div>

      <div>
        <h4 className="py-2 fw-bold">Add an avatar</h4>
        <div className="profile d-flex responsive" style={{ gap: "3rem" }}>
       {Image ?<img
           onClick={onChangeProfile}
            className="border border-black rounded-circle"
            style={{ width: "200px", height: "200px", objectFit: "cover"}}
            src={URL.createObjectURL(Image)}
            alt=""
            />:<img
            onClick={onChangeProfile}
             className="border border-black rounded-circle"
             style={{ width: "200px", height: "200px", objectFit: "cover"}}
             src="https://tse3.mm.bing.net/th?id=OIP.Z5BlhFYs_ga1fZnBWkcKjQHaHz&pid=15.1"
             alt=""
             />}
          <div className="py-4 flex-column choesimg d-flex justify-content-evenly">
            <input
              className="w-2 overflow-hidden fw-bold "
              ref={profilePicture}
              style={{ width: "105px", display:"none" }}
             onChange={handleImageUpload}
              type="file"
              name="profilePic"
              id="profilePic"
              placeholder="choose image" />
              
              <div>

              <button className="mx-2 border border-black btn" 
             
              onClick={onChangeProfile}>Upload image</button>
              <button className="mx-2 border border-black btn" onClick={DeleteImage}>Delete Image</button>
              </div>
            <p className="text-secondary">
              <i className="fa-solid fa-chevron-right fs-6"></i> Or choose one
              of our defaults Next btn
            </p>
          </div>
        </div>
      </div>
      <div className=" locationsd-flex flex-column justify-content-between h-25 w-50">

          <h4 className="mb-3 fw-bold">Add your location</h4>
          <div>            
          <input className="mt-3 rounded shadow-lg w-100 location" type="text" placeholder="San Francisco " />
          </div>
        
        <div className="" style={{width:"200px"}}>

      <a href="/section">  <button className="mt-5 btns w-100">Next</button> </a>
      <p className="text-center text-secondary" disabled>or Press RETURN</p>
        </div>
      </div>

    </div>
              </div>
  );
};
