import React from 'react'
import '../../styles/apropos.css'
import FadeCollapse from '../Fade'

class Service extends React.Component {
  render() {
    return (
      <FadeCollapse
        titre="Service"
        component="service"
        description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
      />
    )
  }
}

export default Service
