export function renderCards(cards) {
  return {type: "RENDER_CARDS", payload: cards}
}

export function addFlippedCard(card) {
  return {type: "ADD_FLIPPED_CARD", payload: card}
}

export function removeFlippedCard(card) {
  return {type: "REMOVE_FLIPPED_CARD", payload: card}
}