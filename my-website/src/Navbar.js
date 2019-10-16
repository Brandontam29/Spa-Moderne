import React, { Component } from "react"
import { Link } from "react-router-dom"
import { withLocalize } from "react-localize-redux"

import LanguageToggle from "./LanguageToggle.js"

class NavBar extends Component {
  render = () => {
    return (
      <div>
        <img src="localhost:3000/images/home-logo.png" alt="" />
        {withLocalize(LanguageToggle)}
        <Link to="/">Home</Link>
        <Link to="/login">Promotion</Link>
        <Link to="/signup">Services</Link>
        <Link to="/products">Produits</Link>
        <Link to="/myaccount">Contact</Link>
      </div>
    )
  }
}

export default NavBar
