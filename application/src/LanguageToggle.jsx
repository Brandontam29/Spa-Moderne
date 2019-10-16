import React from "react"
import { withLocalize } from "react-localize-redux"

const LanguageToggle = ({ languages, activeLanguage, setActiveLanguage }) => {
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

export default withLocalize(LanguageToggle)
