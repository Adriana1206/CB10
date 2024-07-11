import classNames from 'classnames';
import styles from './ShowBox.module.css';

function ShowBox({imgUrl}) {
  return (
    <div className={classNames(styles.showBox)}>
        <img src={imgUrl}/>
    </div>
  )
}

export default ShowBox