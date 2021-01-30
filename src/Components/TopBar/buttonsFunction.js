

var ButtonStates = {
  "isHide" : true,
  "textColorsSelected" : 0,
  "backgroundColorsSelected" : 0,
  "textColors" : ["#0f0", "red", "yellow"],
  "backgroundColors" : 
    ["rgba(0, 0, 0, 90%)", 
     "rgba(0, 0, 0, 60%)", 
     "rgba(255, 255, 255, 90%)"
    ]
}


const getNextElement = (list, index) => {
  let length = list.length
  if (index + 1 === length) {
      return [list[0], 0]
  }
  return [list[index + 1], index + 1]
}


const nextBackgroundColors = colorObj => {
  let [nextElement, nextIndex] = getNextElement(
    colorObj["backgroundColors"],
    colorObj["backgroundColorsSelected"])
  colorObj["backgroundColorsSelected"] = nextIndex
  return nextElement
}


const nextTextColors = colorObj => {
  let [nextElement, nextIndex] = getNextElement(
    colorObj["textColors"],
    colorObj["textColorsSelected"])
  colorObj["textColorsSelected"] = nextIndex
  return nextElement
}


const addDisplayPropertyToElement = (element, property) =>
  element.style.display = property


const changeTextColor = element => 
  element.style.color = nextTextColors(ButtonStates)


const changeBackgroundColors = element => 
  element.style.backgroundColor = nextBackgroundColors(ButtonStates)


const hideOrShowElement = element => {
  if (ButtonStates["isHide"]) {
    addDisplayPropertyToElement(element, "inline")
  } else {
    addDisplayPropertyToElement(element, "none")
  }
  ButtonStates["isHide"] = ! ButtonStates["isHide"]
}


export {hideOrShowElement, changeTextColor, changeBackgroundColors}
