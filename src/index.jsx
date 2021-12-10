import './styles/apropos.css'
import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './header/Header.jsx'
import Apropos from './pages/Apropos'
import Error from './pages/Error'
import { data } from './assets/json/data'
import Hebergement from './pages/Hebergement'
import Footer from './footer/Footer.jsx'
import './styles/responsive.css'

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
/*route hebergement data.id pour path et reprend l'id pour charger la page du bon host*/

ReactDOM.render(
  <View
    id={data.map((item) => {
      return item.id
    })}
  />,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
