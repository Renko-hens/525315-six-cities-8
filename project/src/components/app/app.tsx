import  Main from '../main/main';
import { AppProps } from '../../types/props';

function App({placeCards}: AppProps): JSX.Element {
  return <Main placeCards={placeCards}/>;
}

export default App;
