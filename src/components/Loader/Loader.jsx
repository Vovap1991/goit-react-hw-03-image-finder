import { InfinitySpin } from 'react-loader-spinner';
import { LoaderElement } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderElement>
      <InfinitySpin width="200" color="#3f51b5" />;
    </LoaderElement>
  );
};
