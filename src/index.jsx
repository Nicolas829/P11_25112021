import './styles/apropos.css'
import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './header/Header.jsx'
import Apropos from './pages/Apropos'
import Error from './components/Error'
import { data } from './assets/json/data'
import Hebergement from './pages/Hebergement'
import Footer from './footer/Footer.jsx'
import './styles/responsive.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {data.map((item) => {
          return (
            <Route
              path={item.id}
              element={<Hebergement id={item.id} key={item.id} />}
            />
          )
        })}
        <Route path="apropos" element={<Apropos />} key="route-apropos" />
        <Route path="*" element={<Error />} key="route-error" />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
