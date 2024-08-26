import IconMinus from '../icons/IconMinus'
import IconPlus from '../icons/IconPlus'
import styles from './Counter.module.css'

function Counter() {
  return (
    <div className={styles.counter}>
        <button><IconMinus/></button>
        <div>0</div>
        <button><IconPlus/></button>
    </div>
  )
}

export default Counter