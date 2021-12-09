import React from 'react'
import '../styles/description.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
/*objet créant les collapse de la page a propos*/
class FadeCollapse extends React.Component {
  constructor(props) {
    super(props)
    this.description = this.props.description /*props de description  */
    this.component = this.props.component /*props création de la classname */
    this.titre = this.props.titre /*props titre*/

    this.state = {
      open: false /*state ouverture/fermeture collapse*/,
      rotation: 0 /* rotation du chevron ouverture/fermeture collapse*/,
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
      <div className={`box-${this.component}`}>
        <button className={this.component} onClick={this.toggle}>
          <h3 className={`titre-${this.component}`}>{this.titre}</h3>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="chevron-fade"
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
