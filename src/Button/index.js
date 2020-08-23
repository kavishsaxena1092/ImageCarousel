import React from 'react';
import classnames from 'classnames';

import './index.scss';

export default class Button extends React.Component {
  static defaultProps = {
    isActive: true,
    secondaryGreen: false,
    isLoading: false,
    isPrimary: true,
    redButton: false,
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }


  onClick(e) {
    const { isActive, onClick, isLoading } = this.props;
    if (isActive && onClick && !isLoading) {
      onClick(e);
    }
  }

  render() {
    const {
      title, isWhite, secondaryGreen, isLoading, isPrimary, redButton,
      style, icon, className, jsClass = '', containerClassName } = this.props;
    let { isActive } = this.props;
    if (isLoading) {
      isActive = true;
    }
    return (
      <div className={classnames("button-container", containerClassName)}>
        {isLoading && <div className={`${isPrimary ? 'white-loading-dots' : 'red-loading-dots'}`}>
          <div className="dot-pulse"/>
        </div>}
        <div
          className={classnames('button',
            { 'button-primary': isPrimary },
            { 'button-secondary': !isPrimary },
            { 'button-white': isWhite },
            { 'button-inactive': !isActive },
            { 'button-red': isActive && redButton },
            { 'button-secondary-green': isActive && secondaryGreen },
            { [className]: className },
            { [jsClass]: jsClass },
          )}
          onClick={this.onClick}
          style={style || {}}>
          {icon && <div className="button-icon">{icon}</div>}
          {!isLoading &&
          <div className="button-text-container"><span>{title}</span></div>}
        </div>
      </div>
    );
  }
}
