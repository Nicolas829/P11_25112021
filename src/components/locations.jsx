import { data } from '../assets/json/data'
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/locations.css'

class Locations extends React.Component {
  render() {
    return (
      <>
        <div className="main-container">
          {data.map((data) => {
            return (
              <Link to={data.id} className="link-box" key={data.id}>
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
