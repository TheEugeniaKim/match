const defaultState = {
  cards: [],
  flippedCards: [],
  showDirections: true,
}

function reducer(prevState = defaultState, action){
  switch(action.type){
    case "RENDER_CARDS":
      return {...prevState, cards: action.payload}
    case "ADD_FLIPPED_CARD":
      return {...prevState, 
        flippedCards: [...prevState.flippedCards, action.payload]
      }
    case "REMOVE_FLIPPED_CARD":
      return {...prevState, 
        flippedCards: prevState.flippedCards.filter(card => card !== action.payload)
      }
    case "MATCH": 
      return {prevState, 
        cards: prevState.cards.filter(card => card.name !== action.payload), 
        flippedCards: []
      }
    case "DIRECTIONS": 
      return {...prevState, 
        showDirections: !prevState.showDirections
      }
    default: 
      return prevState
  }
}

export default reducer 