import { Link } from 'react-router-dom';
import { AppRoute, FIVE_POINT_RATING_COEFFICIENT } from '../../constant';
import { Offer } from '../../types/offers';

type CitiesPlaceCardProps = {
  offer: Offer,
  onActiveCardEnter: (e: unknown) => void,
  onActiveCardLeave: (e: unknown) => void,
};

function CitiesPlaceCard({
  offer,
  onActiveCardEnter,
  onActiveCardLeave,
}: CitiesPlaceCardProps): JSX.Element {
  const {
    id,
    premium,
    srcImage,
    value,
    rating,
    bookmarkActive,
    title,
    type,
  } = offer;

  return (
    <article className="cities__place-card place-card"
      onPointerEnter={onActiveCardEnter}
      onPointerLeave={onActiveCardLeave}
    >
      {premium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`offer/${id}`}>
          <img className="place-card__image" src={srcImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{value}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button
            ${bookmarkActive ? 'place-card__bookmark-button--active' : ''}`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{
              width: `${rating * FIVE_POINT_RATING_COEFFICIENT}%`,
            }}
            >
            </span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default CitiesPlaceCard;
