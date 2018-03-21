import React from 'react';
import styles from './Login.style.css';

import Box from '../Box';

const Login = () => <Box className={styles.login}>
  <div>
    <label htmlFor='login-username'>Username</label>
    <input id='login-username' type='text' />
  </div>
  <div>
    <label htmlFor='login-pat'>Personal Access Token</label>
    <input id='login-pat' type='text' />
  </div>
</Box>;

export default Login;