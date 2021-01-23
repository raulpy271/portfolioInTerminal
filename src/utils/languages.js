

const getBrowserLanguage = () => {
  let languageAndCountry = navigator.language
  let language = languageAndCountry.split("-")[0]
  return language
}


export {getBrowserLanguage}
