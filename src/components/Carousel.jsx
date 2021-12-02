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
            <Carousel fade className="lightbox" interval={null} indicators={false} >                                       
                        
                        {this.pictures.map(item=>{console.log(item.charAt(item.length-5));return (
                            <Carousel.Item className="carousel" >   
                                
                                <div  className="d-block w-100">
                                <p className="counter">{item.charAt(item.length-"5")}/{this.pictures.length}</p>
                                        <img src={item} alt="First Slide" className="img-carousel"  />  
                                        
                                                                    
                                </div>
                                <Carousel.Caption>
                                  
                                </Carousel.Caption>
                           
                                </Carousel.Item>
                                
                            )})}                
            
             </Carousel>
             
               
           
        );
                        }}      


export default LigthBox