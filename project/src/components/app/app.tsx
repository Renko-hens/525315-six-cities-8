import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Offers } from '../../types/offers';
import { FavoritesType } from '../../types/favorites';
import {
  AppRoute,
  AuthorizationStatus
} from '../../constant';
import PrivateRoute from '../private-route/private-route';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import SignIn from '../sign-in/sign-in';
import Room from '../room/room';
import NotFoundScreen from '../not-found-screen/not-found-screen';

type AppProps = {
  offers: Offers,
  favorites: FavoritesType,
};

function App({
  offers,
  favorites,
}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main offers={offers} />
        </Route>

        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          authorizationStatus={AuthorizationStatus.Auth}
          render={() => <Favorites favorites={favorites} />}
        />

        <Route exact path={AppRoute.Login}>
          <SignIn />
        </Route>

        <Route exact path={AppRoute.Offer}>
          <Room/>
        </Route>

        <Route path={AppRoute.NotFound}>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
