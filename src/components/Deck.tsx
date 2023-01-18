"use client";

import React, { FC, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { localDeck } from "@/utils";

const Deck: FC = () => {
  const [cardsInDeck] = useState<number[]>(() => localDeck.getDeck());

  return (
    <section>
      {cardsInDeck.length === 0 ? (
        <div className="">
          <h3>No Hay cartas en el mazo </h3>
        </div>
      ) : (
        <div
          className="mt-12 grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fill,minmax(150px,1fr))" }}
        >
          {cardsInDeck.map((id) => (
            <Link className="" key={id} href={`card/${id}`}>
              <Image
                className="w-auto h-auto"
                alt="IMAGE"
                width={150}
                height={200}
                src={`https://images.ygoprodeck.com/images/cards/${id}.jpg`}
              ></Image>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default Deck;
