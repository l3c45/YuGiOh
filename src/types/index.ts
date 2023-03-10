export interface Icard {
  "id": number,
  "name": string,
  "desc": string,
  "atk": number,
  "def": number,
  "level": number,
  "race": string,
  "attribute": string,
  "card_images": 
    {
      "image_url": string,
   
    }
  ,
}

export interface Error {
  error: string
}

export interface Response {
  data: Datum[];
  error?: string;
  
}

export interface Datum {
  id:          number;
  name:        string;
  type:        string;
  frameType:   string;
  desc:        string;
  atk:         number;
  def:         number;
  level:       number;
  race:        string;
  attribute:   string;
  card_sets:   CardSet[];
  card_images: CardImage[];
  card_prices: CardPrice[];
}

export interface CardImage {
  id:                number;
  image_url:         string;
  image_url_small:   string;
  image_url_cropped: string;
}

export interface CardPrice {
  cardmarket_price:   string;
  tcgplayer_price:    string;
  ebay_price:         string;
  amazon_price:       string;
  coolstuffinc_price: string;
}

export interface CardSet {
  set_name:        string;
  set_code:        string;
  set_rarity:      string;
  set_rarity_code: string;
  set_price:       string;
}

export type ParamsID = {
  params: { id: string };
};

export type ParamsName = {
  params: { name: string };
};