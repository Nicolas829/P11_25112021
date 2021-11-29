import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons'


class Note extends React.Component {
    constructor(props){
 
        super(props);
        this.note=this.props.note
       
            }
     render (){
       
       
       return (
           <div className="box-stars">
             
          <FontAwesomeIcon icon={faStar} className="star-grey"/>
          <FontAwesomeIcon icon={faStar} className="star-grey"/>
          <FontAwesomeIcon icon={faStar} className="star-grey"/>
          <FontAwesomeIcon icon={faStar} className="star-grey"/>
          <FontAwesomeIcon icon={faStar} className="star-grey"/>
                
           </div>
       )}}

export default Note