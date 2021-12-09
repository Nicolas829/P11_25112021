import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/error.css'

/*page erreur mauvais path*/
class Error extends React.Component {
  render() {
    return (
      <div className="main-error">
        <h1 className="titre-error">404</h1>
        <h2 className="texte-error">
          {' '}
          Oups! La page que vous chercher n'existe pas
        </h2>
        <Link className="accueil-error" to="/" key="Accueil">
          Retourner à la page d'accueil
        </Link>
      </div>
    )
  }
}

export default Error
