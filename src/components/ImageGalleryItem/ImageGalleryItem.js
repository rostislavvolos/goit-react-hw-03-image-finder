import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({picture, onClick}) {
    return (
    <li className={styles.gallery_item} onClick={()=> onClick(picture.largeImageURL)}>
  <img src={picture.webformatURL} alt={picture.tags} className={styles.image}/>
</li>
    )
}



ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  picture: PropTypes.arrayOf(PropTypes.shape).isRequired,
};