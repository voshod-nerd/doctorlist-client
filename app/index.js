import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './containers/Root';
import store from "./redux/index";

import './app.global.css';

 //let app = require('electron').remote;


render(

  <AppContainer>
    <Root store={store}  />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    // eslint-disable-next-line global-require
    const NextRoot = require('./containers/Root').default;
    render(
      <AppContainer>
        <NextRoot store={store}  />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
