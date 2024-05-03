import { LuDot } from 'react-icons/lu';
import Toggle from '../common/Toggle';
import { SwiperSlide } from 'swiper/react';
import ProfileImageBox from '../common/ProfileImageBox';
import SwiperBox from '../common/SwiperBox';
import { styled } from '@mui/material';

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

const UpdatedProfileWrapper = styled('div')({
  margin: '0 1rem',
});

const UpdatedProfiles = styled(SwiperSlide)(({ theme }) => ({
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  gap: '0.35rem',

  marginRight: '0.7rem',

  fontSize: theme.typography.body1.fontSize,
}));

const StyledDot = styled(LuDot)(({ theme }) => ({
  position: 'absolute',
  top: '-0.5rem',
  left: '-0.7rem',
  color: ' red !important',

  fontSsize: theme.typography.subtitle1.fontSize,
}));
