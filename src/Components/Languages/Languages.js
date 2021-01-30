import {supportedLanguages} from '../../text/textManager.js'
import './Languages.css'


const convertLanguageInStringToElement = language => (
  <a 
    className="language"
    key={language}
    href={"?language=" + language}
  >
    {language}
  </a>
)


const Languages = () => {
  let allLanguagesComponent = (
    supportedLanguages.map(convertLanguageInStringToElement)
  )


  return (
    <div className="languages">
      {allLanguagesComponent}
    </div>
  )
}


export default Languages
