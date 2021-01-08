import {useEffect} from 'react'
import Draggable from 'draggable_dialog'


const turnDraggable = (Component, objectSentToDraggableLibrary) => {
  return ( () => {
    useEffect( () =>
      new Draggable(objectSentToDraggableLibrary)
    )
    return <Component/>
  })
}


export default turnDraggable
