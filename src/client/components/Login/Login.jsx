import React from 'react';
import PropTypes from 'prop-types';
import LoginUIState from './Login.state';
import styles from './Login.style.css';

import Box from '../Box';

const Login = ({ login, ui }) =>
  <Box className={styles.login}>
    <form onSubmit={(e) => {
      e.preventDefault();
      login(ui.username, ui.personalAccessToken);
    }}>
      <div>
        <label htmlFor='login-username'>Username</label>
        <input id='login-username' type='text' value={ui.username} onChange={ui.onChangeUsername} />
      </div>
      <div>
        <label htmlFor='login-pat'>Personal Access Token</label>
        <input id='login-pat' type='text' value={ui.personalAccessToken} onChange={ui.onChangePersonalAccessToken} />
      </div>
      <input className={styles.submit} type='submit' value='clickme' />
    </form>
  </Box>;

Login.propTypes = {
  login: PropTypes.func.isRequired,
  ui: PropTypes.instanceOf(LoginUIState).isRequired
};

export default Login;