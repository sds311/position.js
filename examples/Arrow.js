import React, {PropTypes} from 'react'
import cx from 'classnames'
import {toCamelCase, getOppositePlacement} from '../src/helpers'
import styles from './Arrow.css'

const Arrow = ({className, direction, offset, size, color}) => (direction !== 'center' &&
  <span
    className={cx(className, styles.arrow, styles[direction])}
    style={{
      ...offset,
      borderWidth: `${size}px`,
      [toCamelCase(`border-${getOppositePlacement(direction)}-color`)]: color,
    }}
  />
)

Arrow.propTypes = {
  direction: PropTypes.oneOf(['top', 'bottom', 'right', 'left', 'center'])
}

export default Arrow
