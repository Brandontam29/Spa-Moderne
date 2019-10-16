import React, { Component } from "react"
import { Link } from "react-router-dom"
import { withLocalize } from "react-localize-redux"
import LanguageToggle from "./LanguageToggle"
import Logo from "./images/home-logo.png"

class NavBar extends Component {
  render = () => {
    console.log("NAV BAR HERE")
    return (
      <div>
        <img className="img" src={Logo} alt="" />
        {withLocalize(LanguageToggle)}
        <Link to="/">Home</Link>
        <Link to="/promotion">Promotion</Link>
        <Link to="/services">Services</Link>
        <Link to="/products">Produits</Link>
        <Link to="/contact">Contact</Link>
      </div>
    )
  }
}

export default withLocalize(NavBar)
