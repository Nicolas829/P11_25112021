import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Survey from "./pages/Survey"
import Header from "./header/Header.jsx"
import App from "./pages/App"
import Error from './components/Error'


ReactDOM.render(
  <React.StrictMode>
    
        <Router>
          <Header />
         
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="survey" element={<Survey />} />
          <Route exact path="app" element={<App />} />
          <Route element={<Error />} />

          
          </Routes>
          
        </Router>
    
  </React.StrictMode>,
document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

