import contentEN from './contentEN.js'
import contentPT from './contentPT.js'


const defaultLanguage = "en"
const languages = {
  "en" : contentEN,
  "pt" : contentPT
}


class TextManager {
  constructor(languages, defaultLanguage) {
    this.languages = languages
    this.actualLanguage = defaultLanguage
  }


  getSection = section => {
    return this.languages[this.actualLanguage][section]
  }


  changeLanguage = language => {
    this.actualLanguage = language
  }
}


const portfolioTextWithTwoLanguages = 
  new TextManager(languages, defaultLanguage)


const getSection = portfolioTextWithTwoLanguages.getSection


const changeLanguage = portfolioTextWithTwoLanguages.changeLanguage


export {getSection, changeLanguage}
