import styles from './Loader.module.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";



import Loader from "react-loader-spinner";



const loader = () => {
    return(
        <div className={styles.center}>
        <Loader type="TailSpin" color="#3f51b5" height={80} width={80} />
      </div>
    )
}

export default loader;