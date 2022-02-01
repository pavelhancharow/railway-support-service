import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from './app/App';
import { setupStore } from './store/store';
import { GlobalStyle } from './styles/globalStyle';

const store = setupStore();

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);
