import React from 'react'
import styles from './ThumbNail.module.css';
import classNames from 'classnames';

function ThumbNail({isSelected = false, thumbNail = ""}) {
  return (
    <div className={classNames(styles.thumbNail, styles.selected)}>
        <img src= {thumbNail}/>
        <div className={classNames(isSelected && styles.over)}></div>
    </div>
  )
}

export default ThumbNail