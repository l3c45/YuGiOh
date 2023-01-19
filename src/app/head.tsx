import MetaTags from "@/components/MetaTags";
import { FC } from "react";

const Head: FC = () => {
  return (
    <>
      <title> Yu-Gi-Oh! </title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <MetaTags />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
};

export default Head;
