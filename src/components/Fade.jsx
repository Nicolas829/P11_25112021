import React from 'react'
import '../styles/description.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

class FadeCollapse extends React.Component {
  constructor(props) {
    super(props)
    this.description = this.props.description
    this.component = this.props.component
    this.titre = this.props.titre

    this.state = {
      open: false,

      rotation: 0,
    }
    this.toggle = this.toggle.bind(this)
    this.rotate = this.rotate.bind(this)
  }

  rotate() {}

  toggle() {
    this.setState(() => {
      let newRotation = this.state.rotation + 180

      this.setState({
        rotation: newRotation,
        open: !this.state.open,
      })
    })
    if (this.state.open === false) {
      this.display = 'block'
    } else {
      this.display = 'none'
    }
  }

  render() {
    console.log(this.display)

    const { rotation } = this.state
    return (
      <div className={`box-${this.component}`}>
        <button className={this.component} onClick={this.toggle}>
          <h3 className={`titre-${this.component}`}>{this.titre}</h3>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="chevron"
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        </button>
        <div>
          <div
            className={`box-text-${this.component}`}
            style={{ display: `${this.display}` }}
          >
            <div className="parent-liste">{this.description}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default FadeCollapse
