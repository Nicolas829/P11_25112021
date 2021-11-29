import { data } from "../assets/json/data"
import React from "react"
import "../styles/locations.css"
import {Link} from 'react-router-dom'


  
class Locations extends React.Component { 
  render() {
  return (
    <>
     
      {data.map((data)=>
      { 
        return (
          <Link to={data.id}  className="box-logement" >
         
              <div className="style-title">
                 {data.title} 
              </div>
              <div className="style-cover">
                <img src={data.cover} className="style-logement-img" alt={data.title}></img>
              </div>
              <div className="style-description">
                  {data.equipments.map(items=><li className="style-liste">{items}</li>)}
              </div>
        
          </Link>
          
        )
      }
      )}
     
    </>
  );
};
}
  
export default Locations