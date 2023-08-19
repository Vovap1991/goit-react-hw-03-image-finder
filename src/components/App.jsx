import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';

export const App = () => {
  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <div>
        <ImageGallery />
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
};
