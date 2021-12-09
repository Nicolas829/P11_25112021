import React from 'react'
import apropos from '../assets/img/apropos.jpg'
import Fiabilite from '../components/apropos/Fiabilite'
import Respect from '../components/apropos/Respect'
import Service from '../components/apropos/Service'
import Securite from '../components/apropos/Securite'
import '../styles/apropos.css'
/*page a propos important les composants créer par Fade*/
class Apropos extends React.Component {
  render() {
    return (
      <main>
        <div className="background-apropos">
          <img src={apropos} className="apropos-img" alt="logo" />
        </div>

        <div className="container-apropos">
          <Fiabilite />
          <Respect />
          <Service />
          <Securite />
        </div>
      </main>
    )
  }
}

export default Apropos
