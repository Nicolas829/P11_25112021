import { data } from "../assets/json/data"
import React from "react"
import "../styles/locations.css"
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';


  
class Locations extends React.Component { 
  render() {
  return (
    <>
     
      {data.map((data)=>
      { 
        return (
          <Link to={data.id}  className="box-logement" >
             <Card className="bg-dark text-white">
                <Card.Img src={data.cover} alt="Card image" className="style-logement-img" />
                <Card.ImgOverlay>
                  <Card.Title>{data.title} </Card.Title>
                  <Card.Text>
                  <div className="style-description">
                  {data.equipments.map(items=><li className="style-liste">{items}</li>)}
                  </div>
              </Card.Text>
              <Card.Text></Card.Text>
            </Card.ImgOverlay>
          </Card>
         
             
        
          </Link>
          
        )
      }
      )}
     
    </>
  );
};
}
  
export default Locations