import { FavoritesType } from '../../types/favorites';
import FavoritesPlaceCard from '../favorites-place-card/favorites-place-card';

type FavoritesListProps = {
  favorites: FavoritesType,
}

function FavoritesList({
  favorites,
}: FavoritesListProps): JSX.Element {
  return (
    <ul className="favorites__list">
      {favorites.map(({
        id,
        location,
        places,
      }) => (
        <li
          key={id}
          className="favorites__locations-items"
        >
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{location}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {places.map((place) => (
              <FavoritesPlaceCard
                key={place.id}
                place={place}
              />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList;
