import React, { Component } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { withLocalize } from "react-localize-redux"
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
    return <div>Home</div>
  }
}

export default withLocalize(Home)
// export default Home
