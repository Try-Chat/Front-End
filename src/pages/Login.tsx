import { styled } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../api/instance';
import useUserStore from '../store/useUserStore';

const Login = () => {
  const { setUserId } = useUserStore();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isAbleButton = password.length > 3 && email.length > 0;

  const login = async () => {
    const { data } = await instance.post<MyProfileDataType>('/users/signin', {
      email,
      password,
    });

    return data;
  };

  const { mutate } = useMutation<MyProfileDataType>({
    mutationFn: login,
    onSuccess: (data) => {
      setUserId({ id: data.id, userId: data.nickname });
      navigate('/friend');
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    mutate();
  };

  return (
    <LoginWrapper>
      <LoginBox onSubmit={handleSubmit}>
        <h2>카카오톡을 시작합니다.</h2>
        <p>
          새로운 카카오계정이 있다면 <br />
          이메일 또는 전화번호로 로그인 해주세요.
        </p>
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
              value={password}
              placeholder="비밀번호"
              minLength={4}
              maxLength={255}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputBox>
        </InputWrapper>
        <LoginButtonBox>
          <LoginButton
            disabled={!isAbleButton}
            $isVaild={isAbleButton}
            type="submit">
            로그인
          </LoginButton>
          <SignInButton type="button">새로운 카카오 계정 만들기</SignInButton>
        </LoginButtonBox>
      </LoginBox>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled('div')({
  width: '500px',
  minHeight: '100vh',
  backgroundColor: '#ffff',

  padding: '2rem 0',

  display: 'flex',
  justifyContent: 'center',
});

const LoginBox = styled('form')({
  width: '70%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.6rem',

  p: {
    textAlign: 'center',
    color: '#8E8E8E',
    lineHeight: '18px',
    marginBottom: '0.5rem',
  },
});

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

const InputWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  margin: '1rem 0',

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
  },
}));

const LoginButtonBox = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  alignItems: 'center',

  button: {
    borderRadius: '5px',
  },
});

const LoginButton = styled('button')<{
  $isVaild: boolean;
}>(({ theme, $isVaild }) => ({
  width: '100%',
  height: '3.3rem',
  fontWeight: 'bold',

  fontSize: '1rem',
  color: $isVaild ? '  #553830' : theme.palette.grey[300],

  backgroundColor: $isVaild ? '#ffd43b' : theme.palette.grey[50],

  cursor: 'pointer',
}));

const SignInButton = styled('button')(({ theme }) => ({
  width: '100%',
  height: '3.3rem',

  fontSize: '1rem',
  fontWeight: 'bold',

  backgroundColor: theme.palette.grey[100],

  cursor: 'pointer',
}));
