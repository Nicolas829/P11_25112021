
import React from "react"
import BG from '../assets/img/BGaccueil.png'
import "../styles/Home.css"
import Locations from "../components/locations"




class Home extends React.Component {
    render (){
   return (
    <main>
        
        <div className="background-titre">
            <img src={BG} alt="bg" className="background-img"/>   
            <h1 className="background-text">Chez vous, partout et ailleurs</h1>
        </div>

        <div className="main-container">
            <Locations />
        </div>
       


    </main>
    
    )
    }
   
    
}

export default Home