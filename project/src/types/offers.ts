export type Offer = {
  id?: number,
  premium: boolean;
  srcImage: string;
  title: string;
  bookmarkActive?: boolean;
  rating: number;
  type: string;
  value: number;
};

export type Offers = Offer[];
