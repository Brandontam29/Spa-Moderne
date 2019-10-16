import React, { Component } from "react"
import { withLocalize } from "react-localize-redux"
import { renderToStaticMarkup } from "react-dom/server"

import Translations from "./translations.json"

// class LanguageToggle extends Component {
//   render = ({ languages, activeLanguage, setActiveLanguage }) => {
//     console.log("LANGUAGE TOGGLE")
//     return (
//       <ul>
//         {languages.map(lang => (
//           <li key={lang.code}>
//             <button onClick={() => setActiveLanguage(lang.code)}>
//               {lang.name}
//             </button>
//           </li>
//         ))}
//       </ul>
//     )
//   }
// }

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
