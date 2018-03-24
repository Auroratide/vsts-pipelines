import React from 'react';
import PropTypes from 'prop-types';
import LoginUIState from './Login.state';
import styles from './Login.style.css';

import Box from '../Box';
import ControlledTextInput from '../ControlledTextInput';

const Login = ({ login, ui }) =>
  <Box className={styles.login}>
    <form onSubmit={ui.onSubmit(login)}>
      <ControlledTextInput label='Username' value={ui.username} onChange={ui.onChangeUsername} />
      <ControlledTextInput label='Personal Access Token' value={ui.personalAccessToken} onChange={ui.onChangePersonalAccessToken} />
      <input className={styles.submit} type='submit' value='clickme' />
    </form>
  </Box>;

Login.propTypes = {
  login: PropTypes.func.isRequired,
  ui: PropTypes.instanceOf(LoginUIState).isRequired
};

export default Login;