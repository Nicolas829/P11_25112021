import React from 'react'
import '../../styles/apropos.css'
import FadeCollapse from '../Fade'

class Fiabilite extends React.Component {
  render() {
    return (
      <FadeCollapse
        titre="Fiabilité"
        component="fiabilite"
        description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
      />
    )
  }
}

export default Fiabilite
