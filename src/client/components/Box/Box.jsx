import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import styles from './Box.style.css';

const Box = ({ children, className }) =>
  <div className={c(styles.box, className)}>
    {children}
  </div>;

Box.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Box;