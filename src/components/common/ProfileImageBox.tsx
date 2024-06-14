import { styled } from '@mui/material';

interface ProfileImageBoxProps {
  size: string;
  imageUrl?: string;
}

const ProfileImageBox = (props: ProfileImageBoxProps) => {
  return (
    <ProfileImage src={props.imageUrl} alt="profile image" size={props.size} />
  );
};

export default ProfileImageBox;

const ProfileImage = styled('img')<{ size: string }>(({ size }) => ({
  width: size,
  height: size,

  borderRadius: '41%',
}));
