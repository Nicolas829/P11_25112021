import React from 'react'
import '../../styles/apropos.css'
import FadeCollapse from '../Fade'
/*on appel la class dans Fade qui va crée l'objet */
class Securite extends React.Component {
  render() {
    return (
      <FadeCollapse
        titre="Securité"
        component="securite"
        description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      />
    )
  }
}

export default Securite
