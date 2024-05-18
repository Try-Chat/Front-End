import { styled } from '@mui/material';
import { profileType } from '../../friend/Friends';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';

interface MyProfileEditModalProps {
  profile: profileType;
  editTarget: string;
  handleModalClose: VoidFunction;
}

const MyProfileEditModal = ({
  profile,
  editTarget,
  handleModalClose,
}: MyProfileEditModalProps) => {
  const editConfig = {
    name: {
      label: '이름',
      maxLength: 20,
      value: profile.name,
    },
    statusMessage: {
      label: '상태메시지',
      maxLength: 60,
      value: profile.statusMessage || '',
    },
  };

  const editType = editTarget === 'name' ? 'name' : 'statusMessage';
  const { label, maxLength, value: defaultValue } = editConfig[editType];
  const [editedValue, setEditedValue] = useState(defaultValue);
  const isValid =
    defaultValue !== editedValue &&
    ((editType !== 'name' && editedValue.trim() !== '') ||
      editedValue.trim() !== '');

  return (
    <ModalBox>
      <Header>
        <button type="button" onClick={handleModalClose}>
          취소
        </button>
        <p>{label}</p>
        <ValidationButton type="button" disabled={!isValid} $isValid={isValid}>
          확인
        </ValidationButton>
      </Header>
      <EditBox>
        <EditContentBox>
          <EditInputBox>
            <EditInput
              value={editedValue}
              type="text"
              onChange={(e) => setEditedValue(e.target.value)}
              maxLength={maxLength}
            />
            <IconButton type="button" onClick={() => setEditedValue('')}>
              <IoClose />
            </IconButton>
          </EditInputBox>
          <span>{`${editedValue.length} / ${maxLength}`}</span>
        </EditContentBox>
      </EditBox>
    </ModalBox>
  );
};

export default MyProfileEditModal;

const ModalBox = styled('div')({
  width: '500px',
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
});

const Header = styled('header')(({ theme }) => ({
  width: '100%',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  padding: '1rem',
  fontSize: theme.typography.subtitle2.fontSize,
  color: '#ffff',

  button: {
    color: 'inherit',
    fontSize: 'inherit',
    backgroundColor: 'inherit',
  },
}));

const EditBox = styled('div')({
  width: '100%',

  flex: 1,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const EditContentBox = styled('div')(({ theme }) => ({
  width: '90%',

  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  gap: '0.8rem',

  span: {
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.grey[200],
    textAlign: 'center',
  },
}));

const EditInputBox = styled('div')({
  width: '100%',
  display: 'flex',
  alignItems: 'center',

  padding: '1rem 0',

  borderBottom: '1px solid rgba(250, 250, 250, 0.2)',
});

const EditInput = styled('input')(({ theme }) => ({
  width: '100%',
  height: '100%',

  textAlign: 'center',
  paddingLeft: '1.2rem',

  backgroundColor: 'inherit',
  border: 'none',

  caretColor: '#F9E000',
  outline: 'none',

  color: '#ffff',

  fontSize: theme.typography.subtitle2.fontSize,
}));

const IconButton = styled('button')(({ theme }) => ({
  width: '1.2rem',
  height: '1.2rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  borderRadius: '50%',

  backgroundColor: theme.palette.grey[500],

  svg: {
    fontSize: theme.typography.body1.fontSize,
    color: '#ffff',
  },
}));

const ValidationButton = styled('button')<{ $isValid: boolean }>(
  ({ theme, $isValid }) => ({
    color: $isValid ? '#ffff' : `${theme.palette.grey[400]} !important`,
  }),
);
