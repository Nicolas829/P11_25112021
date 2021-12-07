import React from 'react'
import '../styles/description.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

class Description extends React.Component {
  constructor(props) {
    super(props)
    this.description = this.props.description
    this.state = {
      open: false,
      rotation: 0,
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState((state) => {
      let newRotation = this.state.rotation + 180
      this.setState({
        open: !this.state.open,
        rotation: newRotation,
      })
      if (this.state.open === false) {
        this.display = 'block'
      } else {
        this.display = 'none'
      }
    })
  }
  render() {
    const { rotation } = this.state
    return (
      <div className="box-description">
        <div className="description" onClick={this.toggle}>
          <h3 className="titre-description">Description</h3>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="chevron"
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        </div>
        <div>
          <div
            className="box-detail-description"
            style={{ display: `${this.display}` }}
          >
            <div className="parent-liste">{this.description}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Description
