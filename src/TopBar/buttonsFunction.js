

var ButtonStates = {
  "isCentralized" : true,
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


const maximizeScreen = element => {
  element.style.top    = "1%"
  element.style.left   = "1%"
  element.style.width  = "98%"
  element.style.height = "98%"
}


const centralizeScreen = element => {
  element.style.top    = "20%"
  element.style.left   = "20%"
  element.style.width  = "60%"
  element.style.height = "60%"
}


const changeTextColor = element => 
  element.style.color = nextTextColors(ButtonStates)


const changeBackgroundColors = element => 
  element.style.backgroundColor = nextBackgroundColors(ButtonStates)


const maximizeOrCentralizeScreen = element => {
  if (ButtonStates["isCentralized"]) maximizeScreen(element)
  else centralizeScreen(element)
  ButtonStates["isCentralized"] = ! ButtonStates["isCentralized"]
}


export {maximizeOrCentralizeScreen, changeTextColor, changeBackgroundColors}
