const defaultState = {
  cards: [],
  flippedCards: [],
}

function reducer(prevState = defaultState, action){
  switch(action.type){
    case "RENDER_CARDS":
      return {...prevState, cards: action.payload}
    case "FLIP_CARD":
      return {...prevState, flippedCards: [...prevState.flippedCards,...action.payload]}
    default: 
      return prevState
  }
}

export default reducer 