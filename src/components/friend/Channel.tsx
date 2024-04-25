import styled from 'styled-components';
import Toggle from '../common/Toggle';
import { MdKeyboardArrowRight } from 'react-icons/md';
import ProfileImageBox from '../common/ProfileImageBox';
import channel from '../../assets/images/channel.png';
import { SwiperSlide } from 'swiper/react';
import SwiperBox from '../common/SwiperBox';

const ChannelItem = () => {
  return (
    <ChannelItemBox>
      <ChannelItemTopBox>
        <ProfileImageBox size="2rem" />
        <p>스피드론</p>
      </ChannelItemTopBox>
      <ChannelDesc>
        <p>추가대출 한도 상담</p>
      </ChannelDesc>
      <ChannelInquiryButton type="button">문의하기</ChannelInquiryButton>
    </ChannelItemBox>
  );
};

const Channel = () => {
  return (
    <ChannelWrapper>
      <Toggle title="채널" />
      <ChannelBox>
        <ProfileImageBox imageUrl={channel} size="2.5rem" />
        <Title>채널</Title>
        <span>15</span>
        <StyledArrowRightIcon />
      </ChannelBox>
      <SwiperBox slidesPerView={3.2} spaceBetween={2.3}>
        <ChannelItem />
        <ChannelItem />
        <ChannelItem />
      </SwiperBox>
      <ChannleNotice>카카오톡에서 제공하는 채널 광고입니다.</ChannleNotice>
    </ChannelWrapper>
  );
};

export default Channel;

const ChannelWrapper = styled.div`
  padding: 0 1rem;
`;

const ChannelBox = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 0.7rem;

  span {
    font-size: ${({ theme }) => theme.fontSize.sm};

    color: ${({ theme }) => theme.colors.gray200};
  }
`;

const Title = styled.div`
  flex: 1;

  font-size: ${({ theme }) => theme.fontSize.sm};

  padding: 0 0.6rem;
`;

const StyledArrowRightIcon = styled(MdKeyboardArrowRight)`
  font-size: ${({ theme }) => theme.fontSize.lg};

  color: ${({ theme }) => theme.colors.gray200};
`;

const ChannelItemBox = styled(SwiperSlide)`
  width: 6.5rem;

  border-radius: 0.3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  margin-right: 0.6rem;
  padding: 0.6rem;

  background-color: ${({ theme }) => theme.colors.gray100};
`;

const ChannelItemTopBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  letter-spacing: -1px;

  p {
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: 600;
  }
`;

const ChannelDesc = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};

  color: ${({ theme }) => theme.colors.gray300};
  letter-spacing: -1px;
`;

const ChannelInquiryButton = styled.button`
  padding: 0.2rem 0.5rem;

  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.xs};

  border-radius: 0.3rem;

  background-color: ${({ theme }) => theme.colors.gray200};
`;

const ChannleNotice = styled.div`
  display: flex;
  justify-content: flex-end;

  font-size: ${({ theme }) => theme.fontSize.xs};

  color: ${({ theme }) => theme.colors.gray300};

  margin-bottom: 0.75rem;
`;
