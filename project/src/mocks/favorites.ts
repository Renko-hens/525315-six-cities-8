import { FavoritesType } from '../types/favorites';
import { generateRandomID } from '../utils';

export const mockFavorites: FavoritesType = [
  {
    id: generateRandomID(),
    location: 'Amsterdam',
    places: [
      {
        id: generateRandomID(),
        premium: true,
        srcImage: 'img/apartment-01.jpg',
        value: 180,
        rating: 4,
        bookmarkActive: true,
        title: 'Beautiful &amp; luxurious apartment at great location',
        type: 'flat',
      },
      {
        id: generateRandomID(),
        premium: false,
        srcImage: 'img/room.jpg',
        value: 80,
        rating: 3,
        bookmarkActive: true,
        title: 'Wood and stone place',
        type: 'Private room',
      },
    ],
  },
  {
    id: generateRandomID(),
    location: 'Cologne',
    places: [
      {
        id: generateRandomID(),
        premium: true,
        srcImage: 'img/apartment-01.jpg',
        value: 120,
        rating: 5,
        bookmarkActive: true,
        title: 'Beautiful &amp; luxurious apartment at great location',
        type: 'flat',
      },
    ],
  },
];
