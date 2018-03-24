import { observer } from 'mobx-react';
import container from './Login.container';
import Login from './Login';

export default container(observer(Login));
