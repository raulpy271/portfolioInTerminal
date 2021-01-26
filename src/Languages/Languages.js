import {getLanguages} from '../text/textManager.js'
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
    getLanguages().map(convertLanguageInStringToElement)
  )


  return (
    <div className="languages">
      {allLanguagesComponent}
    </div>
  )
}


export default Languages
