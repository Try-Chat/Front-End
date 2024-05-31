import { styled } from '@mui/material';
import { useState } from 'react';
import { TfiClose } from 'react-icons/tfi';
import ModalLayout from '../ModalLayout';
import ProfileImageBox from '../../common/ProfileImageBox';
import instance from '../../../api/instance';

interface AddFriendModalProps {
  handleModalClose: VoidFunction;
  onClose: VoidFunction;
  isModal: boolean;
  isClosing: boolean;
}

const AddFriendModal = ({
  handleModalClose,
  isClosing,
  isModal,
}: AddFriendModalProps) => {
  const [friendKakaoId, setFriendKakaoId] = useState('');
  const [isSearched, setIsSearched] = useState(false);

  const handleSearchFriend = async () => {
    try {
      const res = await instance.get(
        `/users/profile/?uniqueName=${friendKakaoId}`,
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ') e.preventDefault();
    if (e.key === 'Enter') {
      setIsSearched(true);
      handleSearchFriend();
    }
  };
  return (
    <ModalLayout
      isModal={isModal}
      onClose={handleModalClose}
      isClosing={isClosing}>
      <ModalBox>
        <ModalTopBox>
          <button type="button" onClick={handleModalClose}>
            <TfiClose />
          </button>
          <Title>카카오톡 ID로 추가</Title>
        </ModalTopBox>
        <InputBox>
          <Input
            type="text"
            maxLength={20}
            placeholder="친구 카카오톡 ID"
            value={friendKakaoId}
            onKeyDown={handleKeyDown}
            onChange={(e) => setFriendKakaoId(e.target.value)}
          />
          {friendKakaoId && (
            <button type="button" onClick={() => setFriendKakaoId('')}>
              <TfiClose />
            </button>
          )}
          <p>{friendKakaoId.length}/20</p>
        </InputBox>
        <ModalBottomBox>
          {isSearched ? (
            <SearchedFriendBox>
              <ProfileImageBox size="4.5rem" />
              <p>어준혁</p>
              <ButtonBox>
                <button type="button">차단</button>
                <button type="button">친구 추가</button>
              </ButtonBox>
            </SearchedFriendBox>
          ) : (
            <MyKakaoIdBox>
              <p>내 아이디</p>
              <p>anftlcb</p>
            </MyKakaoIdBox>
          )}
        </ModalBottomBox>
      </ModalBox>
    </ModalLayout>
  );
};

export default AddFriendModal;

const ModalBox = styled('div')({
  width: '500px',
  padding: '0 1rem',
  backgroundColor: '#ffff',
});

const ModalTopBox = styled('div')({
  display: 'flex',
  alignItems: 'center',

  height: '3rem',

  button: {
    display: 'flex',
    alignItems: 'center',
  },

  svg: {
    fontSize: '1rem',
  },
});

const Title = styled('p')(({ theme }) => ({
  flex: 1,
  textAlign: 'center',

  paddingRight: '1.4rem',
  margin: 0,

  fontSize: theme.typography.subtitle2.fontSize,
}));

const InputBox = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  padding: '0.6rem 0',

  borderBottom: `1px solid ${theme.palette.grey[200]}`,

  '&:focus-within': {
    borderBottom: '1px solid #000',

    svg: {
      display: 'flex',
      alignItems: 'center',
    },
  },

  svg: {
    display: 'none',

    width: '0.9rem',
    height: '0.9rem',

    padding: '0.2rem',
    margin: '0 0.5rem',

    backgroundColor: theme.palette.grey[200],
    color: '#ffff',

    borderRadius: '50%',

    fontSize: theme.typography.body1.fontSize,
  },

  p: {
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.grey[300],
  },
}));

const Input = styled('input')(({ theme }) => ({
  flex: 1,
  border: 'none',
  outline: 'none',
  padding: 0,

  fontSize: theme.typography.subtitle2.fontSize,

  caretColor: '#F9E000',

  '&::placeholder': {
    color: theme.palette.grey[300],
  },
}));

const ModalBottomBox = styled('div')(({ theme }) => ({
  marginTop: '1rem',

  borderRadius: '10px',

  backgroundColor: theme.palette.grey[50],
}));

const MyKakaoIdBox = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  height: '3rem',

  padding: '0 0.7rem',

  fontSize: '0.9rem',

  color: theme.palette.grey[400],
}));

const SearchedFriendBox = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '0.6rem',

  padding: '1.5rem 4rem',
});

const ButtonBox = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.9rem',

  button: {
    width: '6rem',
    height: '2.5rem',

    borderRadius: '5px',

    fontSize: '0.9rem',

    ':first-of-type': {
      backgroundColor: theme.palette.grey[200],
    },

    ':last-of-type': {
      backgroundColor: '#F9E000',
    },
  },
}));
