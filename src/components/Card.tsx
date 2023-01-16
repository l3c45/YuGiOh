"use client";

import { Datum, Icard } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

type Props = {
  card: Icard;
};

const Card = ({ card }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`card/${card.id}`);
  };

  return (
    <article
      onClick={handleClick}
      className="group rounded hover:bg-zinc-700  bg-zinc-800  my-4 w-[170px] h-[310px] flex flex-col justify-between p-2  "
    >
      <h2 className="text-center group-hover:text-yellow-700 ">{card.name}</h2>
      <Image
        className="w-auto h-auto mx-auto"
        src={ card.card_images.image_url }
        alt={"digimon picture"}
        width={150}
        height={200}
      ></Image>
    </article>
  );
};

export default Card;
