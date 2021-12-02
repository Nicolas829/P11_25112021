import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import {  Fade } from 'react-bootstrap';

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
                
            <div className={this.component} onClick={this.toggle}  aria-controls="example-collapse-text"
        aria-expanded={this.state.open} >  
                
                        <h3 className={`titre-${this.component}`}>{this.titre}</h3>
                        <FontAwesomeIcon icon={faChevronDown} className="chevron" />               
                
            </div>
            <Fade in={this.state.open} className={`box-text-${this.component}`} unmountOnExit >
                 
                        <div className="parent-liste" >     
                                {this.description}
                        </div> 
                
            </Fade>
    </div>)
          }}

export default FadeCollapse