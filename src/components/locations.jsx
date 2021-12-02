import { data } from "../assets/json/data"
import React from "react"

import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/locations.css"
import { Card, Row, Col } from 'react-bootstrap';


  
class Locations extends React.Component { 
  render() {
  return (
    <>
     
      {data.map((data)=>
      { 
        return (
          <Row className="col col-lg-4 col-md-12" >
            
              <Col >
                  <Link to={data.id}  className="link-box" >
                    <Card className="box-logement"> 
                        <Card.Img variant="top" src={data.cover} className="style-logement-img" />
                        <Card.Body >
                          <Card.Title>{data.title}</Card.Title>
                          <Card.Text>
                          
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer className="style-description">
                          {data.equipments.map(item=>{return(<li classBame="style-liste">{item}</li>)})}
                        </Card.Footer>
                      </Card>  
                  </Link>
              </Col>
           
          </Row>
          
        )
      }
      )}
     
    </>
  );
};
}
  
export default Locations