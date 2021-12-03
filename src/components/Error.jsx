import React from 'react'
import { Link } from 'react-router-dom'

class Error extends React.Component {
  render() {
    return (
      <div>
        <h1>404</h1>
        <h2> Oups! La page que vous chercher n'existe pas</h2>
        <Link className="nav-header-accueil" to="/" key="Accueil">
          Retourner à la page d'accueil
        </Link>
      </div>
    )
  }
}

export default Error
