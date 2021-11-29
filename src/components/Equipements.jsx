import React from "react";
import "../styles/equipements.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

class Equipements extends React.Component {
   constructor(props){

       super(props);
       this.equipments=this.props.equipments
      }
    render (){    
        
   return (<div className="box-equipement">
               <div className="equipement">
                  <h3 className="titre-equipement">Equipements</h3>
                  <FontAwesomeIcon icon={faChevronDown} className="chevron" />
               </div>
               <div className="box-detail-equipement">  
                    <div className="parent-liste">     
                        {this.equipments.map(item=>{return(<li className="liste-equipement">{item}</li>)})}
                    </div> 
               </div>
          </div>)
          }}

export default Equipements       
