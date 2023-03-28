import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ hits, openModal }) => {
  return (
    <div>
      <ul className={'ImageGallery'}>
        {hits.map(hit => {
          return (
            <ImageGalleryItem
              openModal={openModal}
              largeFoto={hit.largeImageURL}
              key={hit.id}
              url={hit.webformatURL}
            />
          );
        })}
      </ul>
    </div>
  );
};

ImageGallery.propTypes = {
  hits: PropTypes.string.isRequired,
  openModal: PropTypes.string.isRequired,
};
