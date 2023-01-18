import {  ParamsName, Response } from "@/types";

async function getCard(name: string) {
  const res = await fetch(
    `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name}`
  );

  const card: Response = await res.json();

  return card.data[0].name;
}

const Head = async ({ params }: ParamsName) => {
  const title = await getCard(params.name);

  return (
    <>
      <title>{title}</title>
    </>
  );
};

export default Head;
