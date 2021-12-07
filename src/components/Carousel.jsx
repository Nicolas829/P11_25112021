import React from 'react'
import '../styles/carousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

class LigthBox extends React.Component {
  constructor(props) {
    super(props)

    this.pictures = this.props.pictures
    this.array = []
    this.state = {
      translate: -0,
      width: 0,
      imageWidth: 0,
    }

    this.counter = this.counter.bind(this)
    this.translateRight = this.translateRight.bind(this)
    this.translateLeft = this.translateLeft.bind(this)
  }
  counter() {
    this.pictures.forEach(() => {
      let imageSize = window.innerWidth
      this.state.imageWidth = imageSize
      this.state.width = this.pictures.length * 100
    })
  }

  translateRight() {
    this.setState(() => {
      let newTranslate = this.state.translate - 100
      console.log(newTranslate)
      if (newTranslate === -this.pictures.length * 100) {
        newTranslate = 0
      }
      this.setState({
        translate: newTranslate,
      })
    })
  }

  translateLeft() {
    this.setState(() => {
      let newTranslate = this.state.translate + 100
      console.log(newTranslate)
      if (newTranslate === 100) {
        newTranslate = -(this.pictures.length - 1) * 100
      }

      this.setState({
        translate: newTranslate,
      })
    })
  }

  render() {
    {
      this.counter()
    }
    return (
      <div className="lightbox">
        <FontAwesomeIcon
          icon={faChevronRight}
          className="chevron-right"
          onClick={this.translateRight}
        />
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="chevron-left"
          onClick={this.translateLeft}
        />
        <div className="panorama">
          {this.pictures.map((item, index) => {
            return (
              <div
                className="carousel"
                style={{ transform: `translate(${this.state.translate}%)` }}
              >
                <div
                  className="image"
                  id={index + 1}
                  style={{ width: `${this.state.imageWidth}px` }}
                >
                  <p className="counter">
                    {index + 1}/{this.pictures.length}
                  </p>
                  <img
                    src={item}
                    alt="image carousel"
                    className="img-carousel"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default LigthBox
