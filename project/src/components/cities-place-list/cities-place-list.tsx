import { useState } from 'react';
import { Offer, Offers } from '../../types/offers';
import { ActiveCitiesCard } from '../../types/cities-place-card';
import CitiesPlaceCard from '../cities-place-card/cities-place-card';

type CitiesPlaceListProps = {
  offers: Offers,
};

function CitiesPlaceList({
  offers,
}: CitiesPlaceListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeCard, setActiveCard] = useState<ActiveCitiesCard>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer: Offer) => (
          <CitiesPlaceCard
            key={offer.id}
            offer={offer}
            onActiveCardEnter={() => setActiveCard(offer)}
            onActiveCardLeave={() => setActiveCard(null)}
          />
        ))
      }
    </div>
  );
}

export default CitiesPlaceList;
