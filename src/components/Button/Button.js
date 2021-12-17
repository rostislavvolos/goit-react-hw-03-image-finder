import styles from './Button.module.css';
import propTypes from 'prop-types'

export default function Button({onClick}) {
    return(
    <div  className={styles.buttonDiv}>
        <button className={styles.Button} onClick={onClick}>Load whore</button>
    </div>
    )
}

Button.propTypes = {
    onClick: propTypes.func,
  };