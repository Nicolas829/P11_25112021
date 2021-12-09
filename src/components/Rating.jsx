import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

class Note extends React.Component {
  constructor(props) {
    super(props)
    this.rating = this.props.note /*props import rating host*/
    this.note = 5 /* note maximale */
    this.Array = [1, 2, 3, 4, 5] /* array pour construction des étoiles */
  }
  /*array.map, chaque item inférieur à la note de l'hebergeur est en rouge*/
  /* les autres sont en gris*/
  render() {
    return (
      <div className="box-stars">
        {this.Array.map((item) => {
          if (item <= this.rating) {
            return (
              <FontAwesomeIcon
                icon={faStar}
                className="star-red"
                key={`redstar${item}`}
              />
            )
          } else {
            return (
              <FontAwesomeIcon
                icon={faStar}
                className="star-grey"
                key={`greystar${item}`}
              />
            )
          }
        })}
      </div>
    )
  }
}

export default Note
