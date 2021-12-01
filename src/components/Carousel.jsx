import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/carousel.css"
import { Carousel } from 'react-bootstrap';



class LigthBox extends React.Component {
    constructor (props){
        super(props)
        this.pictures=this.props.pictures
      this.state={count:0};
       
       
    }
    render() {
        return (
            <Carousel fade className="lightbox" interval={null} >                                       
                        
                        {this.pictures.map(item=>{return (
                            <Carousel.Item className="carousel" >   
                               
                                <div  className="d-block w-100">
                                        <img src={item} alt="First Slide"   />  
                                                                    
                                </div>
                                <Carousel.Caption>
                                  
                                </Carousel.Caption>
                           
                                </Carousel.Item>
                                
                            )})}                
            
             </Carousel>
             
               
           
        );
                        }}      


export default LigthBox