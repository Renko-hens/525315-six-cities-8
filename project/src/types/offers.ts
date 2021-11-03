export type Offer = {
  id: string,
  premium: boolean;
  srcImage: string;
  title: string;
  bookmarkActive: boolean;
  rating: number;
  type: string;
  value: number;
};

export type Offers = Offer[];
