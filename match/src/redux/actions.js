export function renderCards(cards) {
  return {type: "RENDER_CARDS", payload: cards}
}

export function flipCard(card) {
  return {type: "FLIP_CARD", payload: card}
}