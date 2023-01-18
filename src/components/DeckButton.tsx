"use client";

import { useState } from "react";

import { localDeck } from "@/utils";

interface Props {
  id: number;
}

const DeckButton = ({ id }: Props) => {
  const [deck, setDeck] = useState(() => localDeck.isInDeck(id));

  const toogleDeck = () => {
    localDeck.toogleCardInDeck(id);
    setDeck((prev) => !prev);
  };

  return (
    <button
      onClick={toogleDeck}
      className="dark:bg-background p-2 font-bold rounded w-[200px] hover:dark:bg-primary hover:text-textOff  "
    >
      {deck ? "Remover del mazo" : "Añadir al mazo"}
    </button>
  );
};

export default DeckButton;
