import { styled } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import instance from '../api/instance';
import useUserStore from '../store/useUserStore';
import { useForm } from 'react-hook-form';

const Login = () => {
  const navigate = useNavigate();
  const { setUserId } = useUserStore();
  const {
    handleSubmit,
    register,
    getValues,
    formState: { isValid, errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const login = async () => {
    const { data } = await instance.post<ProfileDataType>('/users/signin', {
      email: getValues('email'),
      password: getValues('password'),
    });

    return data;
  };

  const { mutate, isPending } = useMutation<ProfileDataType>({
    mutationFn: login,
    onSuccess: (data) => {
      setUserId({ id: data.id, userId: data.nickname });
      navigate('/friend');
    },
  });

  const onSubmit = () => {
    mutate();
  };

  return (
    <LoginWrapper>
      <LoginBox>
        <h2>카카오톡을 시작합니다.</h2>
        <p>
          새로운 카카오계정이 있다면 <br />
          이메일 또는 전화번호로 로그인 해주세요.
        </p>
        <InputWrapper onSubmit={handleSubmit(onSubmit)}>
          <InputBox>
            <input
              type="email"
              placeholder="이메일"
              {...register('email', {
                required: '이메일은 필수 입력 항목입니다.',
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
                  message: '유효한 이메일을 입력하세요',
                },
              })}
            />
          </InputBox>
          {errors.email && <p>{errors.email.message}</p>}
          <InputBox>
            <input
              type="password"
              placeholder="비밀번호 (대문자, 특수문자, 숫자 포함 8~64자)"
              {...register('password', {
                required: '비밀번호는 필수 입력 항목입니다.',
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,64}$/,
                  message:
                    '비밀번호는 대문자, 특수문자, 숫자를 포함하고 8자 이상 64자 이하여야 합니다.',
                },
                minLength: 8,
                maxLength: 64,
              })}
            />
          </InputBox>
          {errors.password && <p>{errors.password.message}</p>}
          <LoginButtonBox>
            <LoginButton
              disabled={isPending || !isValid}
              $isVaild={isValid}
              type="submit">
              로그인
            </LoginButton>
            <SignInButton type="button" onClick={() => navigate('signup')}>
              새로운 카카오 계정 만들기
            </SignInButton>
          </LoginButtonBox>
        </InputWrapper>
      </LoginBox>
    </LoginWrapper>
  );
};

export default Login;

const LoginWrapper = styled('div')({
  width: '500px',
  minHeight: '100vh',
  backgroundColor: '#ffff',

  paddingTop: '2rem',

  display: 'flex',
  justifyContent: 'center',
});

const LoginBox = styled('div')({
  width: '100%',

  padding: '0 2.5rem',

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

const InputWrapper = styled('form')(({ theme }) => ({
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

    ':focus': {
      borderBottom: `1.4px solid ${theme.palette.grey[500]}`,
    },
  },

  p: {
    fontSize: '0.7rem',
    margin: '0.5rem 0',

    textAlign: 'start',
    color: '#000',
  },
}));

const LoginButtonBox = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  alignItems: 'center',

  marginTop: '2rem',

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
  color: $isVaild ? '#553830' : theme.palette.grey[300],

  backgroundColor: $isVaild ? '#ffd43b' : theme.palette.grey[50],
}));

const SignInButton = styled('button')(({ theme }) => ({
  width: '100%',
  height: '3.3rem',

  fontSize: '1rem',
  fontWeight: 'bold',

  backgroundColor: theme.palette.grey[100],
}));
