import React from 'react'
import '../styles/carousel.css'
import { Carousel, Tab } from 'react-bootstrap'

class LigthBox extends React.Component {
  constructor(props) {
    super(props)
    this.pictures = this.props.pictures
    this.array = []
    this.state = {
      count: 0,
    }
    this.counter = this.counter.bind(this)
  }
  counter() {
    this.pictures.forEach((item) => {
      this.state.count = this.state.count + 1 / this.pictures.length
    })
  }

  render() {
    return (
      <Carousel fade className="lightbox" interval={null} indicators={false}>
        {this.pictures.map((item) => {
          console.log(this.pictures.length)
          return (
            <Carousel.Item className="carousel">
              {this.counter()}
              <div className="d-block w-100">
                <p className="counter">
                  {Math.round(this.state.count)}/{this.pictures.length}
                </p>
                <img src={item} alt="First Slide" className="img-carousel" />
              </div>
            </Carousel.Item>
          )
        })}
      </Carousel>
    )
  }
}

export default LigthBox
