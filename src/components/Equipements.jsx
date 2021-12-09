import React from 'react'
import '../styles/equipements.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

class Equipements extends React.Component {
  constructor(props) {
    super(props)

    this.equipments =
      this.props.equipments /*props importer de la page principal*/
    this.state = {
      open: false /*state ouverture collapse*/,
      rotation: 0 /*state rotation chevron ouverture/fermeture collapse*/,
    }
    this.toggle = this.toggle.bind(this)
  }
  toggle() {
    let newRotation = this.state.rotation + 180

    this.setState({
      rotation: newRotation,
      open: !this.state.open,
    })

    if (this.state.open === false) {
      this.display = 'block'
    } else {
      this.display = 'none'
    }
  }

  render() {
    const { rotation } = this.state

    return (
      <div className="box-equipement">
        <div className="equipement" onClick={this.toggle}>
          <h3 className="titre-equipement">Equipements</h3>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="chevron"
            style={{ transform: `rotate(${rotation}deg)` }}
          />
        </div>
        <div>
          <div
            className="box-detail-equipement"
            style={{ display: `${this.display}` }}
          >
            <div className="parent-liste">
              {this.equipments.map((item) => {
                return (
                  <li className="liste-equipement" key={item}>
                    {item}
                  </li>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Equipements
