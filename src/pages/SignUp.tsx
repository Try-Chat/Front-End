import { styled } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../api/instance';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const signUP = async () => {
    const { data } = await instance.post('/users/signup', {
      email,
      password,
    });

    console.log(data);

    return data;
  };

  const { mutate } = useMutation({
    mutationFn: signUP,
    onSuccess: () => navigate('friend'),
  });

  const handleButtonClick = () => {
    mutate();
  };

  return (
    <Wrapper>
      <h2>새로운 카카오계정을 생성합니다.</h2>
      <InputWrapper>
        <InputBox>
          <input
            type="text"
            value={email}
            placeholder="이메일 또는 전화번호"
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <input
            type="text"
            value={password}
            placeholder="비밀번호 (8~32자)"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <input
            type="text"
            value={passwordConfirm}
            placeholder="비밀번호 확인 (8~32자)"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </InputBox>
        <ButtonBox>
          <Button $isGray type="button" onClick={handleButtonClick}>
            확인
          </Button>
          <Button $isGray={false} type="button" onClick={() => navigate('/')}>
            기존 계정으로 로그인
          </Button>
        </ButtonBox>
      </InputWrapper>
    </Wrapper>
  );
};

export default SignUp;

const Wrapper = styled('form')({
  width: '500px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  backgroundColor: '#fff',

  padding: '2rem 2.5rem 0 2.5rem',

  h2: {
    textAlign: 'center',
  },
});

const InputWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  marginTop: '2rem',

  input: {
    flex: 1,
    width: '100%',
    height: '3.3rem',

    padding: '0.5rem 0',

    border: 'none',

    outline: 'none',

    fontSize: '1rem',
    color: '#495057',

    '::placeholder': {
      color: theme.palette.grey[400],
    },

    ':first-of-type': {
      borderBottom: `1.3px solid ${theme.palette.grey[400]}`,
    },

    ':focus': {
      borderBottom: `1.4px solid ${theme.palette.grey[500]}`,
    },
  },
}));

const InputBox = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',

  button: {
    paddingRight: '0.8rem',
  },

  svg: {
    fontSize: theme.typography.subtitle1.fontSize,
    color: theme.palette.grey[400],
  },
}));

const ButtonBox = styled('div')({
  width: '100%',

  display: 'flex',
  flexDirection: 'column',

  marginTop: '2rem',
});

const Button = styled('button')<{ $isGray: boolean }>(({ $isGray, theme }) => ({
  width: '100%',
  height: '3.3rem',

  fontWeight: 'bold',
  fontSize: '1rem',

  color: $isGray ? theme.palette.grey[300] : theme.palette.grey[500],
  backgroundColor: theme.palette.grey[100],

  borderRadius: '5px',

  marginTop: '1rem',
  cursor: 'pointer',
}));
