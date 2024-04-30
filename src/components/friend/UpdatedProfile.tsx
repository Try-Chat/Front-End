import { LuDot } from 'react-icons/lu';
import styled from 'styled-components';
import Toggle from '../common/Toggle';
import { SwiperSlide } from 'swiper/react';
import ProfileImageBox from '../common/ProfileImageBox';
import SwiperBox from '../common/SwiperBox';

const ProfileItem = ({ friendName }: { friendName: string }) => {
  return (
    <UpdatedProfiles>
      <StyledDot />
      <ProfileImageBox size="2.5rem" />
      <p>{friendName}</p>
    </UpdatedProfiles>
  );
};

const UpdatedProfile = () => {
  return (
    <UpdatedProfileWrapper>
      <Toggle title="업데이트한 프로필" num={6}>
        <SwiperBox slidesPerView={6} spaceBetween={2.15}>
          <ProfileItem friendName="정충일" />
          <ProfileItem friendName="김혜미" />
          <ProfileItem friendName="고미선" />
        </SwiperBox>
      </Toggle>
    </UpdatedProfileWrapper>
  );
};

export default UpdatedProfile;

const UpdatedProfileWrapper = styled.div`
  margin: 0 1rem;
`;

const UpdatedProfiles = styled(SwiperSlide)`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.35rem;

  margin-right: 0.7rem;

  font-size: ${({ theme }) => theme.fontSize.sm};
`;

const StyledDot = styled(LuDot)`
  position: absolute;
  top: -0.5rem;
  left: -0.7rem;
  color: red !important;

  font-size: ${({ theme }) => theme.fontSize.md};
`;
