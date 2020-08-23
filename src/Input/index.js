import React from 'react';
import classnames from 'classnames';

import styles from './index.module.scss';

const FieldComponent = props => {
  const { type, label, placeholder, value, name, id, onChange, classNames = {}, errorText, disabled } = props;
  return (
    <div className={classnames(styles['input-container'], classNames['input-container'])}>
      {label && <span>{label}</span>}
      <input
        type={type}
        id={id}
        name={name}
        disabled={disabled}
        className={classnames(styles['input'], { [styles['disabled']]: disabled })}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
      {errorText && <div className={styles['error']}>{errorText}</div>}
    </div>
  )
}

FieldComponent.defaultProps = {
  onChange: () => {},
  value: '',
  type: 'text',
  label: '',
  placeholder: ''
}

export default FieldComponent;
