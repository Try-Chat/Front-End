import { styled } from '@mui/material';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';

interface FriendProfileEditModalProps {
  handleModalClose: VoidFunction;
  profile: ProfileDataType;
}

const FriendProfileEditModal = ({
  handleModalClose,
  profile,
}: FriendProfileEditModalProps) => {
  const [editFriendName, setEditFriendName] = useState(profile.nickname);
  // const [editFriendMemo, setEditFriendMemo] = useState(profile.memo || '');

  // const isVaild = editFriendName !== profile.nickname || editFriendMemo !== '';
  const isVaild = editFriendName !== profile.nickname;

  return (
    <ModalBox>
      <Header>
        <button type="button" onClick={handleModalClose}>
          <IoMdClose />
        </button>
        <p>친구 정보</p>
        <ValidationButton type="button" disabled={!isVaild} $isVaild={isVaild}>
          확인
        </ValidationButton>
      </Header>
      <EditBox>
        <EditBoxItem>
          <EditBoxItemTop>
            <InputLabel htmlFor="name">이름</InputLabel>
          </EditBoxItemTop>
          <div>
            <InputBox>
              <Input
                id="name"
                type="text"
                maxLength={20}
                placeholder={editFriendName === '' ? profile.nickname : ''}
                value={editFriendName}
                onChange={(e) => setEditFriendName(e.target.value)}
              />
              <p>{editFriendName.length}/20</p>
            </InputBox>
          </div>
          <EditBoxItemBottom>
            <p>친구가 설정한 이름 : {profile.nickname}</p>
          </EditBoxItemBottom>
        </EditBoxItem>
        <EditBoxItem>
          <EditBoxItemTop>
            <InputLabel htmlFor="memo">메모</InputLabel>
            {/* <p>{editFriendMemo?.length || 0}/200</p> */}
          </EditBoxItemTop>
          {/* <div>
            <TextArea
              id="memo"
              maxLength={200}
              value={editFriendMemo}
              placeholder="메모 입력"
              onChange={(e) => setEditFriendMemo(e.target.value)}
            />
          </div> */}
          <EditBoxItemBottom>
            <p>입력된 메모는 나에게만 보입니다.</p>
          </EditBoxItemBottom>
        </EditBoxItem>
      </EditBox>
    </ModalBox>
  );
};

export default FriendProfileEditModal;

const ModalBox = styled('div')({
  width: '500px',
  padding: '0 1rem',
  backgroundColor: '#ffff',

  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
});

const Header = styled('header')(({ theme }) => ({
  width: '100%',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.6rem 0',

  color: '#000',

  p: {
    fontSize: '1.1rem',
  },

  button: {
    color: 'inherit',
    fontSize: theme.typography.subtitle2.fontSize,
    backgroundColor: 'inherit',

    display: 'flex',
    alignItems: 'center',

    svg: {
      fontSize: '1.5rem',
    },
  },
}));

const ValidationButton = styled('button')<{ $isVaild: boolean }>(
  ({ theme, $isVaild }) => ({
    color: $isVaild ? '#000' : `${theme.palette.grey[400]} !important`,
  }),
);

const EditBox = styled('div')({
  flex: 1,

  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
});

const EditBoxItem = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.6rem',
});

const EditBoxItemTop = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',

  p: {
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.grey[200],
  },
}));

const InputLabel = styled('label')(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  color: theme.palette.grey[500],
}));

const InputBox = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  padding: '0.6rem 0',

  borderBottom: `1px solid ${theme.palette.grey[200]}`,

  p: {
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.grey[200],
  },
}));

const Input = styled('input')(({ theme }) => ({
  flex: 1,
  border: 'none',
  outline: 'none',
  padding: 0,

  fontSize: theme.typography.subtitle2.fontSize,

  caretColor: '#F9E000',
}));

// const TextArea = styled('textarea')(({ theme }) => ({
//   width: '100%',
//   minHeight: '5.5rem',

//   padding: '0.8rem 1rem',

//   fontSize: theme.typography.subtitle2.fontSize,
//   backgroundColor: '#f8f9fa',

//   border: 'none',
//   borderRadius: '0.3rem',
//   outline: 'none',
//   resize: 'none',
//   caretColor: '#F9E000',

//   '::placeholder': {
//     fontSize: theme.typography.subtitle2.fontSize,
//     color: theme.palette.grey[300],
//   },
// }));

const EditBoxItemBottom = styled('div')(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  color: theme.palette.grey[400],
}));
