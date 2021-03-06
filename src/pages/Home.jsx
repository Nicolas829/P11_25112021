import React from 'react'
import BG from '../assets/img/BGaccueil.png'
import '../styles/Home.css'
import Locations from '../components/locations'

/*page accueil*/
/* import composants locations présentant les locations*/
class Home extends React.Component {
  render() {
    return (
      <main>
        <div className="background-titre">
          <img src={BG} alt="bg" className="background-img" />
          <h1 className="background-text">
            Chez vous, <span> partout et ailleurs</span>
          </h1>
        </div>

        <Locations />
      </main>
    )
  }
}

export default Home
