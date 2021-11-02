import { Offers } from '../types/offers';

export const mockOffers: Offers = [
  {
    id: 1,
    premium: true,
    srcImage: 'img/apartment-01.jpg',
    value: 120,
    rating: 4,
    title: 'Beautiful &amp; luxurious apartment at great location',
    type: 'flat',
  },
  {
    id: 2,
    premium: false,
    srcImage: 'img/room.jpg',
    value: 80,
    rating: 4,
    bookmarkActive: true,
    title: 'Wood and stone place',
    type: 'Private room',
  },
  {
    id: 3,
    premium: false,
    srcImage: 'img/apartment-02.jpg',
    value: 132,
    rating: 4,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
  },
  {
    id: 4,
    premium: true,
    srcImage: 'img/apartment-03.jpg',
    value: 180,
    rating: 5,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
  },
  {
    id: 5,
    premium: false,
    srcImage: 'img/room.jpg',
    value: 80,
    rating: 4,
    bookmarkActive: true,
    title: 'Wood and stone place',
    type: 'Private room',
  },
];