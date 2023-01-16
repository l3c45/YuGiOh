import { Res } from "@/types";
import Image from "next/image";
type Params = {
  params: { id: string };
};

export async function generateStaticParams() {
  const res = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php");
  const cards: Res = await res.json();
  const { data } = cards;

  return data.map((item) => ({ id: item.toString() }));
}

type Name = { name: string };

async function getCard(id: string) {
  console.log("GET", id);
  const res = await fetch(
    `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`
  );

  const card: Res = await res.json();

  return card;
}

const page = async ({ params }: Params) => {
  const card = await getCard(params.id);
  const { data } = card;

  return (
    <section>
      <article className=" relative dark:bg-zinc-700 mt-4 p-4 rounded flex lg:flex-row flex-col">
       <button className='dark:bg-zinc-900 p-2 rounded w-[150px] hover:dark:bg-zinc-700 absolute top-4 right-4 hover:border-2 hover:border-yellow-900  outline-yellow-900  focus:border-yellow-900 '>Añadir al mazo</button>
        <Image
          src={data[0].card_images[0].image_url}
          alt="CARD IMAGE"
          width={300}
          height={450}
        ></Image>

        <div className="flex flex-col justify-between items-center px-4">
          <h1 className="text-2xl font-bold"> {data[0].name} </h1>
          <h3 className="text-xl italic">{data[0].type}</h3>
          <h4 className="text-lg text-yellow-700">Tipo:</h4>
          <div className="flex">
      
            <div className=" w-[150px] dark:bg-zinc-900 p-3 rounded text-center m-1">
       
              Level: <span>{data[0].level}</span>
            </div>
            <div className="w-[150px] dark:bg-zinc-900 p-3 rounded  text-center m-1">
        
              Raza: <span>{data[0].race}</span>
            </div>
          </div>
          <h4 className="text-lg text-yellow-700 ">Puntos:</h4>
          <div className="flex">
            <div className="w-[150px] dark:bg-zinc-900 p-3 rounded  text-center m-1">
              {" "}
              Ataque: <span>{data[0].atk}</span>
            </div>
            <div className="w-[150px] dark:bg-zinc-900 p-3 rounded  text-center m-1">
              {" "}
              Defensa: <span>{data[0].def}</span>
            </div>
          </div>

          <p>{data[0].desc} </p>
        </div>
      </article>
    </section>
  );
};

export default page;
