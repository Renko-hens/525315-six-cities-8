import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { mockOffers } from './mocks/offers';
import { mockFavorites } from './mocks/favorites';

ReactDOM.render(
  <React.StrictMode>
    <App
      offers={mockOffers}
      favorites={mockFavorites}
    />
  </React.StrictMode>,
  document.getElementById('root'));
