import { styled } from '@mui/material';
import kakaoLogo from '../assets/images/kakao.webp';
import { HiMiniEyeSlash } from 'react-icons/hi2';
import { IoEyeSharp } from 'react-icons/io5';
import { useState } from 'react';
import { FaCircle } from 'react-icons/fa6';
import { fontFamily } from '@mui/system';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isSecret, setIsSecret] = useState(false);

  const handlePasswordIconClick = () => {
    setIsSecret((prev) => !prev);
  };

  return (
    <LoginWrapper>
      <LoginBox>
        <KakaoLogo src={kakaoLogo} alt="kakaoLogo" />
        <InputWrapper>
          <InputBox>
            <input
              type="text"
              value={id}
              placeholder="카카오계정 (이메일 또는 전화번호)"
              onChange={(e) => setId(e.target.value)}
            />
          </InputBox>
          <InputBox>
            <input
              type={isSecret ? 'text' : 'password'}
              value={password}
              placeholder="비밀번호"
              minLength={4}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" onClick={handlePasswordIconClick}>
              {password.length > 0 ? (
                isSecret ? (
                  <StyledSecretIcon />
                ) : (
                  <IoEyeSharp />
                )
              ) : null}
            </button>
          </InputBox>
        </InputWrapper>
        <LoginButton>로그인</LoginButton>
      </LoginBox>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled('div')({
  width: '500px',
  minHeight: '100vh',
  backgroundColor: '#F9E000',

  padding: '2rem 0',

  display: 'flex',
  justifyContent: 'center',
});

const LoginBox = styled('div')({
  width: '70%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.6rem',
});

const KakaoLogo = styled('img')({
  width: '12rem',
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

  border: '1.2px solid #ffd43b',

  input: {
    flex: 1,
    width: '100%',
    height: '3.3rem',

    padding: '0.5rem 0.8rem',

    border: 'none',

    outline: 'none',

    fontSize: '1rem',
    color: '#495057',

    '::placeholder': {
      color: theme.palette.grey[300],
    },

    '&[type="password"]': {
      color: '#343a40',
      // letterSpacing: '0.1em',
    },

    ':first-child': {
      borderBottom: '1px solid #e9ecef',
    },
  },
}));

const LoginButton = styled('button')(({ theme }) => ({
  width: '100%',
  height: '3.3rem',

  fontSize: '1rem',
  color: theme.palette.grey[300],

  backgroundColor: theme.palette.grey[100],

  border: '1.2px solid #ffd43b',
}));

const StyledSecretIcon = styled(HiMiniEyeSlash)({
  transform: 'scaleX(-1)',
});
