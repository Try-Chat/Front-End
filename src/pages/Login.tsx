import { styled } from '@mui/material';
import kakaoLogo from '../assets/images/kakao.webp';
import { HiMiniEyeSlash } from 'react-icons/hi2';
import { IoEyeSharp } from 'react-icons/io5';
import { useRef, useState } from 'react';
import instance from '../api/instance';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../store/useUserStore';

const Login = () => {
  const { setUserId } = useUserStore();
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState(false);
  const [isSecret, setIsSecret] = useState(false);
  const isAbleButton = password.length > 3 && id.length > 0;

  const handlePasswordIconClick = () => {
    setIsSecret((prev) => !prev);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await instance.post('/users/signin', {
        username: id,
        password: password,
      });
      setUserId(res.data.id);
      navigate('/friend');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400) {
          if (ref.current) {
            setAuthError(true);
            setPassword('');
            ref.current.focus();
          }
        }
      }
    }
  };

  if (authError && isAbleButton) {
    setAuthError(false);
  }

  return (
    <LoginWrapper>
      <LoginBox onSubmit={handleSubmit} method="post">
        <KakaoLogo src={kakaoLogo} alt="kakaoLogo" />
        <InputWrapper $authError={authError}>
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
              maxLength={255}
              ref={ref}
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
        <LoginButton
          disabled={!isAbleButton}
          $isVaild={isAbleButton}
          type="submit">
          로그인
        </LoginButton>
        {authError && <p>카카오계정 또는 비밀번호를 다시 확인해 주세요.</p>}
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

const LoginBox = styled('form')({
  width: '70%',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.6rem',

  p: {
    color: '#fa5252',
    fontSize: '0.9rem',
  },
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

const InputWrapper = styled('div')<{ $authError: boolean }>(
  ({ theme, $authError }) => ({
    width: '100%',

    border: $authError ? '1.2px solid #e03131' : '1.2px solid #ffd43b',

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
      },

      ':first-of-type': {
        borderBottom: '1px solid #e9ecef',
      },
    },
  }),
);

const LoginButton = styled('button')<{ $isVaild: boolean }>(
  ({ theme, $isVaild }) => ({
    width: '100%',
    height: '3.3rem',

    fontSize: '1rem',
    color: theme.palette.grey[300],

    backgroundColor: $isVaild ? '#3B1C1C' : theme.palette.grey[100],

    border: $isVaild ? 'none' : '1.2px solid #ffd43b',

    cursor: $isVaild ? 'pointer' : 'default',

    '&:hover': {
      backgroundImage: $isVaild
        ? 'linear-gradient(rgba(255,255,255,0.2),rgba(255,255,255,0.2))'
        : 'none',
    },
  }),
);

const StyledSecretIcon = styled(HiMiniEyeSlash)({
  transform: 'scaleX(-1)',
});
