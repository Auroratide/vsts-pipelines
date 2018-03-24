import React from 'react';
import PropTypes from 'prop-types';
import c from 'classnames';

import styles from './ControlledTextInput.style.css';

const ControlledTextInput = ( {
  value,
  onChange,
  label,
  className
} ) => <div className={c(styles['controlled-text-input'], className)}>
  {label && <label>{label}</label>}
  <input type='text' value={value} onChange={onChange} />
</div>;

ControlledTextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  className: PropTypes.string
};

export default ControlledTextInput;