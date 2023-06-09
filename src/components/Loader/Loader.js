import { Oval } from 'react-loader-spinner';
import { SpinnerWrapper } from './Loader.styled';

const Loader = () => (
  <SpinnerWrapper>
    <Oval
      height={14}
      width={14}
      color="#000000"
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#84a17d"
      strokeWidth={10}
      strokeWidthSecondary={10}
    />
  </SpinnerWrapper>
);

export default Loader;
