import { ParamsID, Response } from "@/types";

async function getCard(id: string) {
  const res = await fetch(
    `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`
  );

  const card: Response = await res.json();

  return card.data[0].name;
}

const Head = async ({ params }: ParamsID) => {
  const title = await getCard(params.id);

  return (
    <>
      <title>{title}</title>
    </>
  );
};

export default Head;
