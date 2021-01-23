import {isValidLanguage, changeLanguage} from '../text/textManager.js'


const getLanguageFromUrlQueryParam = () => {
  let query = "language"
  let urlParamsObject = new URLSearchParams(window.location.search)
  return urlParamsObject.get(query)
}


const getBrowserLanguage = () => {
  let languageAndCountry = navigator.language
  let language = languageAndCountry.split("-")[0]
  return language
}


const setLanguageFromQueryParamOrBrowserLanguage = () => {
  let languageFromUrl = getLanguageFromUrlQueryParam()
  let languageFromBrowser = getBrowserLanguage()


  if (isValidLanguage(languageFromUrl)) {
    changeLanguage(languageFromUrl)
  } else if (isValidLanguage(languageFromBrowser)) {
    changeLanguage(languageFromBrowser)
  }
}


export {setLanguageFromQueryParamOrBrowserLanguage}
