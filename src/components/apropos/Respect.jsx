import React from 'react'
import '../../styles/apropos.css'
import FadeCollapse from '../Fade'
/*on appel la class dans Fade qui va crée l'objet */
class Respect extends React.Component {
  render() {
    return (
      <FadeCollapse
        titre="Respect"
        component="respect"
        description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      />
    )
  }
}

export default Respect
