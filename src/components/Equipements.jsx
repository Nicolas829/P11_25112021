import React from 'react'
import '../styles/equipements.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { Fade } from 'react-bootstrap'

class Equipements extends React.Component {
  constructor(props) {
    super(props)

    this.equipments = this.props.equipments
    this.state = {
      open: false,
      icon: { faChevronDown },
    }
    this.toggle = this.toggle.bind(this)
  }
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
    console.log(this.state.icon, this.toggle)
    return (
      <div className="box-equipement">
        <div className="equipement" onClick={this.toggle} bsClass="custom-btn">
          <h3 className="titre-equipement">Equipements</h3>
          <FontAwesomeIcon icon={faChevronDown} className="chevron" />
        </div>
        <div>
          <div
            className="box-detail-equipement"
            style={{ display: `${this.display}` }}
          >
            <div className="parent-liste">
              {this.equipments.map((item) => {
                return <li className="liste-equipement">{item}</li>
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Equipements
