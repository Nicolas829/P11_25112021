import React from 'react'
import '../styles/carousel.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

/*on crée le carousel*/
class LigthBox extends React.Component {
  constructor(props) {
    super(props)

    this.pictures = this.props.pictures /*image*/
    this.id = this.props.id /*id herbegement*/
    this.state = {
      translate: -0 /* State de transition vertical*/,
      width: this.pictures.length * 100 /*state de largeur du panorama*/,
      imageWidth: window.innerWidth /* state largeur image */,
    }

    this.translateRight =
      this.translateRight.bind(this) /*transition droite par 100%*/
    this.translateLeft =
      this.translateLeft.bind(this) /*transition gauche par 100%*/
  }

  translateRight() {
    let newTranslate = this.state.translate - 100

    if (newTranslate === -this.pictures.length * 100) {
      newTranslate = 0
    }
    this.setState({
      translate: newTranslate,
    })
  }

  translateLeft() {
    let newTranslate = this.state.translate + 100

    if (newTranslate === 100) {
      newTranslate = -(this.pictures.length - 1) * 100
    }

    this.setState({
      translate: newTranslate,
    })
  }
  /*rendu carousel */
  /*fontawesome pour les chevrons */
  /*array.map pour les images*/
  render() {
    return (
      <div className="lightbox" key={`lightbox${this.id}`}>
        <FontAwesomeIcon
          icon={faChevronRight}
          className="chevron-right"
          onClick={this.translateRight}
          key={`chevronRight${this.id}`}
        />
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="chevron-left"
          onClick={this.translateLeft}
          key={`chevronLeft${this.id}`}
        />
        <div className="panorama" key={`panorama${this.id}`}>
          {this.pictures.map((item, index) => {
            return (
              <div
                className="carousel"
                style={{ transform: `translate(${this.state.translate}%)` }}
                key={`carousel${item}`}
              >
                <div
                  className="image"
                  id={index + 1}
                  style={{ width: `${this.state.imageWidth}px` }}
                  key={`image${this.id}`}
                >
                  <p className="counter" key={index}>
                    {index + 1}/{this.pictures.length}
                  </p>
                  <img
                    src={item}
                    alt={`carousel${item}`}
                    className="img-carousel"
                    key={item}
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
