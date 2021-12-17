import styles from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'
import PropTypes from 'prop-types';

export default function ImageGallery({pictures, onClick}) {
    const element = pictures.map(picture => <ImageGalleryItem onClick={onClick} picture={picture} key={picture.id} {...picture}/>)
    return (
       <ul className={styles.gallery}>
        {element}
        </ul>
    )
}

ImageGallery.propTypes = {
    pictures: PropTypes.array,
    bigImage: PropTypes.func,
  };