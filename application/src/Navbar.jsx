import React, { Component } from "react"
import { Link } from "react-router-dom"
import { withLocalize, Translate } from "react-localize-redux"

import LanguageToggle from "./LanguageToggle"
import Logo from "./images/home-logo.png"

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topics: ["home", "promotion", "services", "products", "contact"],
      mouseOver: {
        home: false,
        promotion: false,
        services: false,
        products: false,
        contact: false
      }
    }
  }

  handleOpen = topic => {
    let mouseOverTopic = { ...this.state.mouseOver }
    mouseOverTopic[topic] = true
    this.setState({ mouseOver: mouseOverTopic })
  }

  handleClose = topic => {
    let mouseOverTopic = { ...this.state.mouseOver }
    mouseOverTopic[topic] = false
    this.setState({ mouseOver: mouseOverTopic })
  }

  renderMenu = topic => {
    if (this.state.mouseOver.topic === true) {
      return (
        <div>
          this is the menu <Translate id={"navbar-topics." + topic} />
        </div>
      )
    }
    return <div></div>
  }

  renderLinks = topics => {
    return topics.map(topic => {
      if (topic !== "home") {
        return (
          <Link
            to={"/" + topic}
            onMouseEnter={() => this.handleOpen(topic)}
            onMouseLeave={() => this.handleClose(topic)}
          >
            {this.renderMenu(topic)}
            <Translate id={"navbar-topics." + topic} />{" "}
          </Link>
        )
      }
      return (
        <Link to={"/"}>
          <Translate id={"navbar-topics." + topic} />{" "}
        </Link>
      )
    })
  }

  render = () => {
    return (
      <div>
        <Link to={"/"}>
          <img className="img" src={Logo} alt="" />
        </Link>
        <LanguageToggle />

        {this.renderLinks(this.state.topics)}
      </div>
    )
  }
}

export default withLocalize(NavBar)
