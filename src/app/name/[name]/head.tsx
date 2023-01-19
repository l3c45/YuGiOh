import MetaTags from "@/components/MetaTags";
import { ParamsName, Response } from "@/types";

async function getCard(name: string) {
  const res = await fetch(
    `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name}`
  );

  const card: Response = await res.json();

  return card;
}

const Head = async ({ params }: ParamsName) => {
  const request = await getCard(params.name);
  let title;
  if (request.error) {
    title = "Error";
  } else {
    title = request.data[0].name;
  }
  return (
    <>
      <title>{title}</title>
      <MetaTags />
    </>
  );
};

export default Head;
