import { Offers } from '../../types/offers';
import PlaceCard from '../place-card/place-card';

type PlaceCardListProps = {
  offers: Offers,
};

function PlaceCardList({
  offers,
}: PlaceCardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <PlaceCard
            key={offer.id}
            premium={offer.premium}
            srcImage={offer.srcImage}
            value={offer.value}
            rating={offer.rating}
            title={offer.title}
            bookmarkActive={offer.bookmarkActive}
            type={offer.type}
          />
        ))
      }
    </div>
  );
}

export default PlaceCardList;
