import styled from 'styled-components';
import banner from '../../assets/images/banner.png';

const Banner = () => {
  return (
    <BannerWrapper>
      <img src={banner} />
    </BannerWrapper>
  );
};

export default Banner;

const BannerWrapper = styled.div`
  padding: 1rem 0;
  height: 7rem;

  img {
    width: 100%;
    height: 100%;

    border-radius: 0.3rem;
  }
`;
