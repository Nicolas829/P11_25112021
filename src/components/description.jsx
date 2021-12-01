import React from "react";
import "../styles/description.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Button, Fade } from 'react-bootstrap';

class Description extends React.Component {
   constructor(props){

       super(props);
       this.description=this.props.description 
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
        
   return (<div className="box-description" >
                
   <Button className="description" onClick={this.toggle}   >  
      
               <h3 className="titre-description">Description</h3>
               <FontAwesomeIcon icon={faChevronDown} className="chevron" />               
      
   </Button>
   <Fade in={this.state.open}>
       <div className="box-detail-description">  
               <div className="parent-liste">     
                    {this.description}
               </div> 
       </div>
   </Fade>
</div>)
          }}

export default Description         
