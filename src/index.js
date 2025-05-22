import React from 'react';
import { createRoot } from 'react-dom/client';
import Routes from "./Routes";
import './css/index.css';

import store from './store';
import { Provider } from 'react-redux';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <Routes />
  </Provider>
);