const defaultState = {
  cards: [],
  flippedCards: []
}

function reducer(prevState = defaultState, action){
  switch(action.type){
    case "RENDER_CARDS":
      return {...prevState, cards: action.payload}
    default: 
      return prevState
  }
}

export default reducer 