import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-responsive-carousel';


class LigthBox extends React.Component {
    constructor (props){
        super(props)
        this.pictures=this.props.pictures
    }
    render() {
        return (
            <Carousel>
                <div>
                    <img src={this.pictures} />
                  
                </div>
               
            </Carousel>
        );
    }
}

export default LigthBox