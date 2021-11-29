import React from "react";
import "../styles/description.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

class Description extends React.Component {
   constructor(props){

       super(props);
       this.description=this.props.description    }
    render (){    
        
   return (<div className="box-description">
               <div className="description">
                  <h3 className="titre-description">Description</h3>
                  <FontAwesomeIcon icon={faChevronDown} className="chevron"/>
               </div>
               <div className="box-detail-description">
                  <p className="detail-description">
                  {this.description}
                  </p>
               </div>
          </div>)
          }}

export default Description         
