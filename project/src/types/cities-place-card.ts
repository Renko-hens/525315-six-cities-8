export type CitiesPlaceCardType = {
  id: string,
  premium: boolean;
  srcImage: string;
  title: string;
  bookmarkActive: boolean;
  rating: number;
  type: string;
  value: number;
};

export type ActiveCitiesCard = CitiesPlaceCardType | null;
