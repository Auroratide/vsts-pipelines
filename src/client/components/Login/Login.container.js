import { inject } from 'mobx-react';
import LoginUIState from './Login.state';

const storeToProps = stores => ( {
  login: stores.store.session.login,
  ui: new LoginUIState()
} );

export default inject(storeToProps);
