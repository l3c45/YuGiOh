import Image from "next/image";
import { Inter } from "@next/font/google";
import { NextPage } from "next";
import { ReactNode } from "react";
import Card from "@/components/Card";
import { Datum, Icard, Res } from "@/types";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

type Cards = { data: [] };

const getCards = async () => {
  const res = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php", {
    cache: "force-cache",
  });

  const cards: Res = await res.json();
  const { data } = cards;
  const parsed = data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      desc: item.desc,
      atk: item.atk,
      def: item.def,
      level: item.level,
      race: item.race,
      attribute: item.attribute,
      card_images: {
        image_url: item.card_images[0].image_url,
        image_url_small: item.card_images[0].image_url_small,
        image_url_cropped: item.card_images[0].image_url_cropped,
      },
    };
  });

  return parsed;
};

const Home = async () => {

  const cards = await getCards();

  return (
    
    
      <section className="inter.className">
        <ul className="flex flex-row flex-wrap justify-evenly items-center">
          {cards.map((item,i) => (
            i<100?<Card key={item.id} card={item}></Card>:null
          ))}
        </ul>
      </section>
   
  );
};
export default Home;
