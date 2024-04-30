import styled from 'styled-components';
import defaultImg from '../../assets/images/defaultImg.jpg';

interface ProfileImageBoxProps {
  size: string;
  imageUrl?: string;
}

const ProfileImageBox = (props: ProfileImageBoxProps) => {
  return (
    <ProfileImage
      src={props.imageUrl || defaultImg}
      alt="profile image"
      size={props.size}
    />
  );
};

export default ProfileImageBox;

const ProfileImage = styled.img<ProfileImageBoxProps>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};

  border-radius: 41%;
`;
