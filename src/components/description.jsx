import React from 'react'
import '../styles/description.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Fade } from 'react-bootstrap'

class Description extends React.Component {
  constructor(props) {
    super(props)
    this.description = this.props.description
    this.state = {
      open: false,
      icon: { faChevronDown },
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    this.setState((state) => {
      this.setState({
        open: !this.state.open,
        icon: { faChevronUp },
      })
      if (this.state.open === false) {
        this.display = 'block'
      } else {
        this.display = 'none'
      }
    })
  }
  render() {
    return (
      <div className="box-description">
        <div className="description" onClick={this.toggle}>
          <h3 className="titre-description">Description</h3>
          <FontAwesomeIcon icon={faChevronDown} className="chevron" />
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
