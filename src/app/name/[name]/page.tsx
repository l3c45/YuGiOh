import DeckButton from "@/components/DeckButton";
import { Error, ParamsName, Response } from "@/types";
import Image from "next/image";
import { notFound, redirect } from 'next/navigation'

export const dynamicParams = true;

export async function generateStaticParams() {
  const res = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php");
  const cards: Response = await res.json();

  return cards.data
    .filter((_, i) => i > 10 && i < 110)
    .map((card) => ({ name: card.name.split(" ").join("_").toLowerCase() }));
}

async function getCard(name: string) {
  const res = await fetch(
    `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name}`
  );

  const card: Response  = await res.json();

  return card;
}

const page = async ({ params }: ParamsName) => {
  const parsedName = params.name.split("_").join(" ");

  const card  = await getCard(parsedName);

  if(card.error) redirect("/")

  const parsed = card.data.map((item) => {
    return {
      id: item.id,
      name: item.name,
      desc: item.desc,
      atk: item.atk,
      def: item.def,
      level: item.level,
      race: item.race,
      attribute: item.attribute,
      image: item.card_images[0]?.image_url,
    };
  });

  const { id, name, desc, atk, def, level, race, attribute, image } = parsed[0];

  return (
    <section>
      <article className=" text-text relative dark:bg-card mt-4 p-4 rounded flex lg:flex-row flex-col">
        <Image
        priority
          className="w-auto h-auto mx-auto"
          src={image}
          alt="CARD IMAGE"
          width={300}
          height={450}
        ></Image>

        <div className="flex w-full flex-col justify-between items-center px-4 mt-4">
          <div className="flex flex-col justify-center items-center gap-4">
            <DeckButton id={id}></DeckButton>
            <h1 className="text-2xl font-bold"> {name} </h1>
          </div>

          <h4 className="text-lg text-yellow-700">Tipo:</h4>
          <div className="flex">
            {level ? (
              <div className=" w-[120px] dark:bg-button p-3 rounded text-center m-1">
                Level: <span>{level}</span>
              </div>
            ) : null}

            <div className="w-[120px] dark:bg-button p-3 rounded  text-center m-1">
              Raza: <span>{race}</span>
            </div>
          </div>

          {atk ? (
            <>
              {" "}
              <h4 className="text-lg text-yellow-700 ">Puntos:</h4>
              <div className="flex">
                <div className="w-[120px] dark:bg-button p-3 rounded  text-center m-1">
                  Ataque: <span>{atk}</span>
                </div>
                <div className="w-[120px] dark:bg-button p-3 rounded  text-center m-1">
                  Defensa: <span>{def}</span>
                </div>
              </div>
            </>
          ) : null}

          {desc.split(".").map((item,i) => (
            <p key={i} className="md:px-12 px-2 text-justify">
              {item}
            </p>
          ))}
        </div>
      </article>
    </section>
  );
};

export default page;
