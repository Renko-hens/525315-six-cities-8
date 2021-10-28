import { Route, Redirect } from 'react-router-dom';
import { RouteProps } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constant';

type PrivateRouteProps = RouteProps & {
  render: () => JSX.Element;
  redirectTo?: AppRoute;
  authorizationStatus: AuthorizationStatus;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {exact, path, redirectTo = AppRoute.Login, render, authorizationStatus} = props;
  return (
    <Route
      exact={exact}
      path={path}
      render={() => (
        authorizationStatus === AuthorizationStatus.Auth
          ? render()
          : <Redirect to={redirectTo} />
      )}
    />
  );
}

export default PrivateRoute;
