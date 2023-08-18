import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export const App = () => {
  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <div>
        <ImageGallery />
      </div>
    </div>
  );
};
