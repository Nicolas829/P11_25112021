import React from 'react'

class Tags extends React.Component {
  constructor(props) {
    super(props)
    this.tags = this.props.tags
  }
  render() {
    return (
      <div className="tags">
        {this.tags.map((item) => {
          return (
            <p className="tag" key={`tag${item}`}>
              {item}
            </p>
          )
        })}
      </div>
    )
  }
}

export default Tags
