/**
 * Created By Nguyen Cong Thanh on 03/04/2019 15:46.
 *
 * Copyright Intelin 2019.
 */

import React from 'react';
import classNames from 'classnames';
import styles from './button.scss';

const BaseButton = ({ 
  text, 
  onClick, 
  disabled, 
  buttonType,
  className
}) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={classNames(
      styles.btn, 
      buttonType,
      className,
      {'float':false}
    )}
  >
    {text}
  </button>
);
class ButtonComponent {
  constructor() {
    this.TYPES = {
      PRIMARY: 'Primary',
      WARNING: 'Warning',
      DANGER: 'Danger',
      SUCCESS: 'Success',
    }
    if (!ButtonComponent.instance) {
      Object.keys(this.TYPES).map(item => {
        this[this.TYPES[item]] = props => (
          <BaseButton { ...props } buttonType={this.TYPES[item].toLowerCase()} />
        )
      })
      ButtonComponent.instance = this
    }
    return ButtonComponent.instance
  }
}

export default new ButtonComponent()