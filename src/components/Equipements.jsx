import React from "react";
import "../styles/equipements.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Button, Fade } from 'react-bootstrap';

class Equipements extends React.Component {
   constructor(props){
        
       super(props);
     
       this.equipments=this.props.equipments
       this.state = {
          open: false,
          icon:{faChevronDown}
            }
       ;
        this.toggle=this.toggle.bind(this);
      }
    toggle(){(this.setState((state)=>{return {
        open:!state.open,
        icon:{faChevronUp}
        }}))}
    
    render (){    
        console.log(this.state.icon, this.toggle)
   return (
   
            <div className="box-equipement" >
                
                    <Button className="equipement" onClick={this.toggle} bsClass="custom-btn"  >  
                       
                                <h3 className="titre-equipement">Equipements</h3>
                                <FontAwesomeIcon icon={faChevronDown} className="chevron" />               
                       
                    </Button>
                    <Fade in={this.state.open}>
                        <div className="box-detail-equipement">  
                                <div className="parent-liste">     
                                     {this.equipments.map(item=>{return(<li className="liste-equipement">{item}</li>)})}
                                </div> 
                        </div>
                    </Fade>
          </div>)
          }}

export default Equipements       
