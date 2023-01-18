import React, { FC } from "react";

import Image from "next/image";
import Link from "next/link";

import { Icard } from "@/types";

type Props = {
  card: Icard;
};

const Card = ({ card }: Props) => {
  const { id, name, card_images } = card;
  const parsedName = name.split(" ").join("-").toLowerCase();

  return (
    <Link href={`card/${id}`}>
      <article className="group rounded hover:bg-zinc-700  bg-card  my-4 w-[170px] h-[310px] flex flex-col justify-between p-2  ">
        <h2 className="text-text text-center group-hover:text-primary ">
          {name}
        </h2>
        <Image
          priority
          className="w-auto h-auto mx-auto"
          src={card_images.image_url}
          alt={"digimon picture"}
          width={150}
          height={200}
        ></Image>
      </article>
    </Link>
  );
};

export default Card;
