import React from "react"
import { data } from "../assets/json/data"
import "../styles/Hebergement.css"
import  Note  from "../components/Rating"
import Tags from "../components/Tags"
import Description from "../components/description"
import Equipements from "../components/Equipements"
import LightBox from "../components/Carousel"




class Hebergement extends React.Component {
   constructor(props){

       super(props);
       this.id=this.props.id   
    
    
    }
    render (){
      
        
   return (
    <main className="main-hebergement">
         {data.map((data)=> 
         {if(this.id===data.id)
      {
        return (<section>
                                          
                                    
                    <LightBox pictures={data.pictures} className="lightbox"/>
                    
                    <div className="name-location-host">
                        <div className="name-location-hebergement">
                            <h1 className="name-hebergement">
                                {data.title}
                            </h1>
                            <h2 className="location-hebergement">
                                {data.location}
                            </h2>
                        </div>
                        <div className="hostname-photo">
                            <h2 className="hostname">
                                {data.host.name}
                            </h2>
                            <img src={data.host.picture} className="photo-host" alt="portrait l'hote" />
                        </div>

                    </div>
                    <div className="tags-note">
                        <Tags tags={data.tags} />                                   
                        <Note note={data.rating} />                       
                    </div>
                    <div className="description-equipements">
                        <Description description={data.description} />
                        <Equipements equipments={data.equipments} />
                    </div>
                    
            </section>
            
        
        
          
        )
      }}
      )}
     
             
       


    </main>
    
    )
    }
   
    
}

export default Hebergement