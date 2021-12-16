import '../styles/apropos.css'
import React from 'react'
import '../styles/index.css'
import Home from '../pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../header/Header.jsx'
import Apropos from '../pages/Apropos'
import Error from '../pages/Error'
import Hebergement from '../pages/Hebergement'
import Footer from '../footer/Footer'

/*Routage des différentes pages et éléments*/

class View extends React.Component {
  constructor(props) {
    super(props)
    this.Location = {
      pathName: this.props.location,
    }
  }

  render() {
    return (
      <Router>
        <Header />
        <Routes key="Route-principal">
          <Route path="/" element={<Home />} key="route-home" />
          <Route path="hebergement/:id" element={<Hebergement />} />
          <Route path="apropos" element={<Apropos />} key="route-apropos" />
          <Route path="*" element={<Error />} key="route-error" />
        </Routes>
        <Footer />
      </Router>
    )
  }
}

export default View
