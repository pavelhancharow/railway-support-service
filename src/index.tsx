import ReactDOM from 'react-dom';

import { App } from './app/App';
import { GlobalStyle } from './styles/globalStyle';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
