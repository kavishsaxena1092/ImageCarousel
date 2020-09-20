import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }


  onClick(e) {
    const { isActive, onClick } = this.props;
    if (isActive && onClick) {
      onClick(e);
    }
  }

  render() {
    const {
      title, isPrimary,
      style, icon, className, containerClassName } = this.props;
    return (
      <div className={classnames("button-container", containerClassName)}>
        <div
          className={classnames('button',
            { 'button-primary': isPrimary },
            { 'button-secondary': !isPrimary },
            { [className]: className },
          )}
          onClick={this.onClick}
          style={style || {}}>
          {icon && <div className="button-icon">{icon}</div>}
          <div className="button-text-container"><span>{title}</span></div>
        </div>
      </div>
    );
  }
}
