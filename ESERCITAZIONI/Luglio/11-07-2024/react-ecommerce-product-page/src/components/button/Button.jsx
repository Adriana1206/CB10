import classNames from 'classnames';
import styles from './Button.module.css';

function Button({children, text="Add to cart"}){
    return(
        <button className={classNames(styles.button)}>
            {/* icona */}
            {children} 
            {text}
        </button>
    )
}

export default Button