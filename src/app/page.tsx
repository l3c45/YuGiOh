import Card from "@/components/Card";

import { Response } from "@/types";

const getCards = async () => {
  const res = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php");

  const cards: Response = await res.json();

  return cards.data.map((item) => {
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
        image_url: item.card_images[0]?.image_url,
      },
    };
  });
};

const Home = async () => {
  const cards = await getCards();

  return (
    <section>
      <ul className="flex flex-row flex-wrap justify-evenly items-center">
        {cards.map((item, i) =>
          i < 100 ? <Card key={item.id} card={item}></Card> : null
        )}
      </ul>
    </section>
  );
};
export default Home;
