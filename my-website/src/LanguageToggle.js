import React, { Component } from "react"
import { withLocalize } from "react-localize-redux"

class LanguageToggle extends Component {
  render = ({ languages, activeLanguage, setActiveLanguage }) => {
    return (
      <ul>
        {languages.map(lang => (
          <li key={lang.code}>
            <button onClick={() => setActiveLanguage(lang.code)}>
              {lang.name}
            </button>
          </li>
        ))}
      </ul>
    )
  }
}

export default withLocalize(LanguageToggle)
