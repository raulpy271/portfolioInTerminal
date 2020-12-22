

var isCentralized = true


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


const maximizeOrCentralizeScreen = element => {
  if (isCentralized) maximizeScreen(element)
  else centralizeScreen(element)
  isCentralized = ! isCentralized
}


export {maximizeOrCentralizeScreen}
