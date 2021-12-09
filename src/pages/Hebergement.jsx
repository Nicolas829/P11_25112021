import React from 'react'
import { data } from '../assets/json/data'
import '../styles/Hebergement.css'
import Note from '../components/Rating'
import Tags from '../components/Tags'
import Description from '../components/description'
import Equipements from '../components/Equipements'
import LightBox from '../components/Carousel'

/*page hebergement */
/*import carousel tags note description et equipement*/
/*création de la page en fonction de l'id */
class Hebergement extends React.Component {
  constructor(props) {
    super(props)
    this.id = window.location.pathname /*import id from url*/
  }
  render() {
    const result = data.filter((item) => `/hebergement/${item.id}` === this.id)
    return (
      <main className="main-hebergement">
        {result.map((data) => {
          return (
            <section key="section-principal">
              <LightBox
                pictures={data.pictures}
                className="lightbox"
                id={data.id}
              />

              <div className="main-box">
                <div className="name-location-hebergement" key={data.id}>
                  <h1 className="name-hebergement" key={data.title}>
                    {data.title}
                  </h1>
                  <h2 className="location-hebergement" key={data.location}>
                    {data.location}
                  </h2>
                  <Tags tags={data.tags} />
                </div>
                <div className="host-stars">
                  <div className="hostname-photo">
                    <h2 className="hostname" key={data.host.name}>
                      {data.host.name}
                    </h2>
                    <img
                      src={data.host.picture}
                      className="photo-host"
                      alt="portrait l'hote"
                      key={data.host.picture}
                    />
                  </div>
                  <div className="stars">
                    <Note note={data.rating} />
                  </div>
                </div>
              </div>

              <div className="description-equipements">
                <Description description={data.description} />
                <Equipements equipments={data.equipments} />
              </div>
            </section>
          )
        })}
      </main>
    )
  }
}

export default Hebergement
