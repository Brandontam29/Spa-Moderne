import React, { Component } from "react"
import { withLocalize, Translate } from "react-localize-redux"

class NotFound extends Component {
  render = () => {
    return (
      <div>
        <h3>404 PAGE NOT FOUND</h3>
      </div>
    )
  }
}

export default withLocalize(NotFound)
