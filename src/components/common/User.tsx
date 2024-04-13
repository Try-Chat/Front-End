import styled from 'styled-components';
import defaultImg from '../../assets/images/defaultImg.jpg';

const User = ({ userName }: { userName: string }) => {
  return (
    <UserWrapper>
      <UserPhoto src={defaultImg} alt="user_photo" />
      <UserName>{userName}</UserName>
    </UserWrapper>
  );
};

export default User;

const UserWrapper = styled.div`
  width: 100%;
  height: 3.5rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 0 0.7rem;

  cursor: pointer;

  &:hover {
    background-color: #f5f6fe;
    transition: 0.2s;
  }
`;

const UserPhoto = styled.img`
  width: 2.5rem;
  height: 2.5rem;

  border-radius: 0.5rem;
`;

const UserName = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
`;
