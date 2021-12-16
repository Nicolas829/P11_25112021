import { data } from '../assets/json/data'
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/locations.css'

/*création des carte de présenations des locations*/
/*link pour chemin url->data.id*/
class Locations extends React.Component {
  render() {
    return (
      <>
        <div className="main-container">
          {data.map((data) => {
            return (
              <Link //création de l'url avec to, la Route ecoute l'url et renvoie le composant hebergement
                to={`hebergement/${data.id}`}
                className="link-box"
                key={data.id}
              >
                <div className="box-logement">
                  <img
                    variant="top"
                    src={data.cover}
                    className="style-logement-img"
                    key={data.cover}
                    alt={data.cover}
                  />
                  <div className="card-body">
                    <h1 className="data-title">{data.title}</h1>
                    <h2 className="style-description">
                      {data.equipments.map((item) => {
                        return (
                          <li className="style-liste" key={item}>
                            {item}
                          </li>
                        )
                      })}
                    </h2>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </>
    )
  }
}

export default Locations
