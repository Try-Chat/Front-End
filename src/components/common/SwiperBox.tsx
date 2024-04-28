import { ReactNode } from 'react';
import styled from 'styled-components';
import { Swiper } from 'swiper/react';

interface SwiperBoxProps {
  children: ReactNode;
  spaceBetween: number;
  slidesPerView: number;
}

const SwiperBox = ({
  children,
  spaceBetween,
  slidesPerView,
}: SwiperBoxProps) => {
  return (
    <SwiperWrapper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      scrollbar={{ draggable: true, el: '.swiper-scrollbar', hide: false }}>
      {children}
    </SwiperWrapper>
  );
};

export default SwiperBox;

const SwiperWrapper = styled(Swiper)`
  margin-bottom: 0.7rem;
  padding: 0 0.2rem;

  display: flex;
`;
