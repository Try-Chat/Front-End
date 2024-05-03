import { styled } from '@mui/material';
import banner from '../../assets/images/banner.png';

const Banner = () => {
  return (
    <BannerWrapper>
      <img src={banner} alt="banner" />
    </BannerWrapper>
  );
};

export default Banner;

const BannerWrapper = styled('div')({
  margin: '0 1rem',
  padding: '1rem 0',

  height: '7rem',

  img: {
    width: '100%',
    height: '100%',

    borderRadius: '0.3rem',
  },
});
