import { useState } from "react";

const Cards = ({ image, content  }) => {

  const [isSubscribed]=useState("flase");

  const [effect, seteffect] = useState({
    border:"2px solid transparent",
    transition:"scale(1)"
  })
  
const handleChange=(event)=>{
  
  if (event.target.checked) {
    
    seteffect({
      border:"2px solid rgb(255, 97, 124)",
      transition:"scale(1.1)"
    })}
    else{
        seteffect({
          border:"2px solid transparent ",
          transition:"scale(1)"
        })
    }
  }
  
  


  return (
    <div className="shadow-lg card" style={{ width: "18rem",transition:"all 1s", border:effect.border, transform:effect.transition}}>
      <img
        src={image}
        className="overflow-hidden card-img-top"
        alt="..."
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <div className="text-center card-body">
        <p className="text-center card-text fw-bolder fs-5">{content}</p>

        <input
          className="rounded-circle radio"         
          value={isSubscribed}
          onChange={handleChange}
          style={{ height: "20px", width: "20px" }}
          type="checkbox"
          name="select"
         
        />
      </div>
    </div>
  );
};

export default Cards;

//
