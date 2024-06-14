import { styled } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { IoMdCheckmark } from 'react-icons/io';
import { TfiClose } from 'react-icons/tfi';
import { getSearchFriend } from '../../../api/friend/profile';
import { addFriend } from '../../../api/friend/utils';
import useUserStore from '../../../store/useUserStore';
import ProfileImageBox from '../../common/ProfileImageBox';
import ModalLayout from '../ModalLayout';

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
  const [showProgressBox, setShowProgressBox] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [friendKakaoId, setFriendKakaoId] = useState('');
  const { userId } = useUserStore();
  const {
    data: searchResult,
    mutate: searchFriend,
    isSuccess: searchSuccess,
    isPending: searchPending,
  } = useMutation<ProfileDataType, Error, string>({
    mutationFn: getSearchFriend,
    onSuccess: () => setHasSearched(true),
  });

  const {
    mutate: addMyFriend,
    isSuccess: addFriendSuccess,
    isPending: addPending,
  } = useMutation<ProfileDataType[], Error, string>({
    mutationFn: addFriend,
    onSuccess: () => setShowProgressBox(true),
  });

  const handleSearchInputKeyDown = (e: React.KeyboardEvent) => {
    if (buttonDisabled) return;
    if (e.key === ' ') e.preventDefault();
    if (e.key === 'Enter' && friendKakaoId) {
      searchFriend(friendKakaoId);
    }
  };

  const buttonDisabled = searchPending || addPending;

  useEffect(() => {
    if (showProgressBox) {
      const timer = setTimeout(() => {
        setShowProgressBox(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [showProgressBox]);

  const handleAddButtonClick = () => {
    addMyFriend(friendKakaoId);
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
            onKeyDown={handleSearchInputKeyDown}
            onChange={(e) => setFriendKakaoId(e.target.value)}
          />
          {friendKakaoId && (
            <button type="button" onClick={() => setFriendKakaoId('')}>
              <TfiClose />
            </button>
          )}
          <p>{friendKakaoId.length}/20</p>
        </InputBox>
        {showProgressBox && (
          <ProgressBox>
            <CheckMark />
          </ProgressBox>
        )}
        {searchResult && (
          <ModalBottomBox>
            {searchSuccess && (
              <SearchedFriendBox>
                <ProfileImageBox
                  imageUrl={
                    searchResult.profileImgPath + searchResult.profileImg
                  }
                  size="4.5rem"
                />
                <p>{searchResult.nickname}</p>
                {addFriendSuccess && <p>친구 등록이 완료되었습니다.</p>}
                <ButtonBox>
                  <button type="button" disabled={buttonDisabled}>
                    {addFriendSuccess ? '프로필 지정' : '차단'}
                  </button>
                  <button
                    type="button"
                    disabled={buttonDisabled}
                    onClick={handleAddButtonClick}>
                    {addFriendSuccess ? '1:1 채팅' : '친구 추가'}
                  </button>
                </ButtonBox>
              </SearchedFriendBox>
            )}
          </ModalBottomBox>
        )}
        {!hasSearched && (
          <ModalBottomBox>
            <MyKakaoIdBox>
              <p>내 아이디</p>
              <p>{userId}</p>
            </MyKakaoIdBox>
          </ModalBottomBox>
        )}
      </ModalBox>
    </ModalLayout>
  );
};

export default AddFriendModal;

const ModalBox = styled('div')({
  width: '500px',

  padding: '0 1rem',

  position: 'relative',

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

const SearchedFriendBox = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '0.6rem',

  padding: '1.5rem 4rem',

  '& p:nth-of-type(2)': {
    fontSize: '0.9rem',
    color: theme.palette.grey[400],
  },
}));

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

const ProgressBox = styled('div')({
  width: '4.1rem',
  height: '4.1rem',

  position: 'absolute',
  top: '18rem',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  borderRadius: '50%',

  backgroundColor: 'rgba(0, 0, 0, 0.4)',
});

const CheckMark = styled(IoMdCheckmark)({
  color: '#ffff',
  fontSize: '2rem',
});
