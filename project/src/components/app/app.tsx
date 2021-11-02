import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Offers } from '../../types/offers';
import {
  AppRoute,
  AuthorizationStatus
} from '../../constant';
import PrivateRoute from '../private-route/private-route';
import Main from '../main/main';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import Property from '../property/property';
import NotFoundScreen from '../not-found-screen/not-found-screen';

type AppProps = {
  offers: Offers,
};

function App({offers}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main offers={offers} />
        </Route>

        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          authorizationStatus={AuthorizationStatus.NoAuth}
          render={() => <Favorites />}
        />

        <Route exact path={AppRoute.Login}>
          <Login />
        </Route>

        <PrivateRoute
          exact
          path={AppRoute.Offer}
          authorizationStatus={AuthorizationStatus.Auth}
          render={() => <Property/>}
        />

        <Route path={AppRoute.NotFound}>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
