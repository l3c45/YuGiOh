
const toogleCardInDeck = (id: number) => {
  let deck: number[] = JSON.parse(localStorage.getItem("deck") || "[]");

  if (deck.includes(id)) {
    deck = deck.filter((cardId) => cardId !== id);
  } else {
    deck.push(id);
  }
  localStorage.setItem("deck", JSON.stringify(deck));
};

const isInDeck = (id: number): boolean => {
  if (typeof window === "undefined") return false;

  const deck: number[] = JSON.parse(localStorage.getItem("deck") || "[]");

  return deck.includes(id);
};

const getDeck = (): [] => {
  if (typeof window === "undefined") return [];

  return JSON.parse(localStorage.getItem("deck") || "[]");
};

const localDeck={
  toogleCardInDeck,
  isInDeck,
  getDeck,
};

export default localDeck
