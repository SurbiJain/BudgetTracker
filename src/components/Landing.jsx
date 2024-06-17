import React from "react";
import { useNavigate } from "react-router-dom";


const Landing = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    
    navigate("/login");
  }
  console.log("Landing is rendered")
  return (
    <div className="container1 black dv-col-end bgImage">
      <div className="align-center height_100">
        <h1>Manage Your finances easily</h1>
        <h4>
          Start monitoring your personal finances and set personalized goals
        </h4>
        <button type="button" className="btn btn-outline-secondary btn-lg" onClick={handleClick}>
          Start
        </button>
      </div>
    </div>
  );
};

export default Landing;
