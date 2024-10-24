
import { useState } from "react";
import "./Country.css"
const Country = ({country,handleVisited,handleFlags}) => {
   // console.log(country);
  const {name,flags} = country;
  // console.log(name.common);
  const [visited,setVisited] = useState(false);
  const visit =()=>{

    setVisited(!visited);

  }
    return (
        <div className={`Country ${visited?"visited":"notVisited"}`}>
            <p style={{color:visited?"red":"white"}}>Country name : {name?.common}</p>
            <img src={flags.png} alt="" srcset="" />
            <br />
            <button onClick={visit}>{visited?"I visited this country":" I want to go"} </button>
            <button onClick={()=>handleVisited(country)} type="button">Mark Visited</button>
            <button onClick={()=>handleFlags(country)} type="button">Add this flag</button>
          
        </div>
        
    );
};

export default Country;