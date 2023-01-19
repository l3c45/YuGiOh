import MetaTags from "@/components/MetaTags";
import { ParamsID, Response } from "@/types";

async function getCard(id: string) {
  const res = await fetch(
    `https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`
  );

  const card: Response = await res.json();

  return card;
}

const Head = async ({ params }: ParamsID) => {
  const request = await getCard(params.id);
  let title;
  if (request.error) {
    title = "Error";
  } else {
    title = request.data[0].name;
  }
  return (
    <>
      <MetaTags />
      <title>{title}</title>
    </>
  );
};

export default Head;
