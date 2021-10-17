export type AppProps = {
  placeCards: {
    id: number,
    premium?: boolean;
    srcImage: string;
    title: string;
    bookmarkActive?: boolean;
    rating: number;
    type: string;
    value: number;
  }[],
};

export type MainProps = {
  placeCards: {
    id: number,
    premium?: boolean;
    srcImage: string;
    title: string;
    bookmarkActive?: boolean;
    rating: number;
    type: string;
    value: number;
  }[],
};

export type PlaceCardProps = {
  premium?: boolean;
  srcImage: string;
  title: string;
  bookmarkActive?: boolean;
  rating: number;
  type: string;
  value: number;
};
