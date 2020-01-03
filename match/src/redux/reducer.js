const defaultState = {
  cards: [],
  flippedCards: [],
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
    default: 
      return prevState
  }
}

export default reducer 