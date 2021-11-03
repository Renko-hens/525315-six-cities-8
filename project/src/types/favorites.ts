export type FavoritesPlace = {
  id: string,
  premium: boolean;
  srcImage: string;
  title: string;
  bookmarkActive: boolean;
  rating: number;
  type: string;
  value: number;
}

export type FavoritesPlaces = FavoritesPlace[];

export type Favorite = {
  id: string,
  location: string,
  places: FavoritesPlaces,
};

export type FavoritesType = Favorite[];
