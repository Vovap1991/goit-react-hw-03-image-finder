import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ imgUrl, tags }) => {
  return (
    <GalleryItem>
      <GalleryItemImage src={imgUrl} alt={tags} width="240" />
    </GalleryItem>
  );
};
