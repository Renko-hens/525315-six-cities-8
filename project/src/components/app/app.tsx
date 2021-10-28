import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppProps } from '../../types/props';
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

function App({placeCards}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <Main placeCards={placeCards} />
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
          authorizationStatus={AuthorizationStatus.NoAuth}
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
