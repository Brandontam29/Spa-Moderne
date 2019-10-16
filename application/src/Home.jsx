import React, { Component } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { withLocalize, Translate } from "react-localize-redux"
import Translations from "./translations.json"

class Home extends Component {
  constructor(props) {
    super(props)

    this.props.initialize({
      languages: [
        { name: "English", code: "en-ca" },
        { name: "French", code: "fr-ca" }
      ],
      translation: Translations,
      options: { renderToStaticMarkup }
    })
  }

  render = () => {
    return (
      <div>
        <Translate id="navbar-topics.home" />
      </div>
    )
  }
}

export default withLocalize(Home)
