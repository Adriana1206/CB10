import React from 'react'
import styles from './ThumbNail.module.css';
import classNames from 'classnames';

function ThumbNail({isSelected = true}) {
  return (
    <div className={classNames(styles.thumbNail, styles.selected)}>
        <img src="./src/assets/images/image-product-1-thumbnail.jpg"/>
        <div className={classNames(isSelected && styles.over)}></div>
    </div>
  )
}

export default ThumbNail