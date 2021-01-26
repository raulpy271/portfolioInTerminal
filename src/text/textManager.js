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
    this.supportedLanguages = Object.keys(languages)
    this.actualLanguage = defaultLanguage
  }


  getSectionContent = section => {
    return this.languages[this.actualLanguage][section]["content"]
  }


  getSectionName = section => {
    return this.languages[this.actualLanguage][section]["name"]
  }


  changeLanguage = language => {
    if (this.isValid(language)) {
      this.actualLanguage = language
    } else {
      throw new Error("Unsuported language: " + language )
    }
  }


  isValid = language => this.supportedLanguages.includes(language)


  getSectionNames = () => {
    let contentInAEspecificLanguage = this.languages[this.actualLanguage]
    let sectionNames = Object.keys(contentInAEspecificLanguage)
    return sectionNames
  }
}


const portfolioTextWithTwoLanguages = 
  new TextManager(languages, defaultLanguage)


const getSectionContent = portfolioTextWithTwoLanguages.getSectionContent


const getSectionName = portfolioTextWithTwoLanguages.getSectionName


const getSectionNames = portfolioTextWithTwoLanguages.getSectionNames


const changeLanguage = portfolioTextWithTwoLanguages.changeLanguage


const isValidLanguage = portfolioTextWithTwoLanguages.isValid


const supportedLanguages = portfolioTextWithTwoLanguages.supportedLanguages


export {
  getSectionName, 
  getSectionNames, 
  getSectionContent, 
  supportedLanguages,
  changeLanguage, 
  isValidLanguage
}


