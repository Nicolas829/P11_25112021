import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

class Note extends React.Component {
  constructor(props) {
    super(props)

    this.rating = this.props.note
    this.note = 5
    this.Array = [1, 2, 3, 4, 5]
    this.state = {
      index: 0,
    }
    this.fillStar = this.fillStar.bind(this)
  }

  fillStar() {
    if (this.state.index < this.rating) {
      this.setState({ index: this.state.index + 1 })
    }
  }

  render() {
    {
      this.fillStar()
    }
    return (
      <div className="box-stars">
        {this.Array.map((item) => {
          if (item <= this.state.index) {
            return <FontAwesomeIcon icon={faStar} className="star-red" />
          } else {
            return <FontAwesomeIcon icon={faStar} className="star-grey" />
          }
        })}
      </div>
    )
  }
}

export default Note
