import React from 'react';
import { Provider } from 'mobx-react';
import store from '../../store';
import Login from '../Login';

import styles from  './App.style.css';

const App = () =>
  <Provider store={store}>
    <main className={styles.app}>
      <Login />
    </main>
  </Provider>;

export default App;