import React from "react";
import "../styles/description.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Button, Fade } from 'react-bootstrap';

class FadeCollapse extends React.Component {
   constructor(props){

       super(props);
       this.description=this.props.description 
       this.component=this.props.component
       this.titre=this.props.titre
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
        
   return (
   <div className={`box-${this.component}`} >
                
            <Button className={this.component} onClick={this.toggle}   >  
                
                        <h3 className={`titre-${this.component}`}>{this.titre}</h3>
                        <FontAwesomeIcon icon={faChevronDown} className="chevron" />               
                
            </Button>
            <Fade in={this.state.open}>
                <div className={`box-text-${this.component}`}>  
                        <div className="parent-liste">     
                                {this.description}
                        </div> 
                </div>
            </Fade>
    </div>)
          }}

export default FadeCollapse