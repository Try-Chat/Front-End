import { styled } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import instance from '../api/instance';
import { useForm } from 'react-hook-form';
import { AxiosError } from 'axios';

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  const signUp = async () => {
    const { data } = await instance.post<string>('/users/signup', {
      email: getValues('email'),
      password: getValues('password'),
    });

    return data;
  };

  const { mutate, isPending } = useMutation<string, AxiosError>({
    mutationFn: signUp,
    onSuccess: (data) => {
      alert({ data });
      navigate('/');
    },
  });

  const onSubmit = () => {
    mutate();
  };

  return (
    <Wrapper>
      <h2>새로운 카카오계정을 생성합니다.</h2>
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
              minLength: {
                value: 8,
                message: '비밀번호는 최소 8자여야 합니다.',
              },
              maxLength: {
                value: 64,
                message: '비밀번호는 최대 64자여야 합니다.',
              },
            })}
          />
        </InputBox>
        {errors.password && <p>{errors.password.message}</p>}
        <InputBox>
          <input
            type="password"
            placeholder="비밀번호 확인 (대문자, 특수문자, 숫자 포함 8~64자)"
            {...register('passwordConfirm', {
              required: '비밀번호 확인은 필수 입력 항목입니다.',
              validate: (value) =>
                value === getValues('password') ||
                '비밀번호가 일치하지 않습니다.',
              minLength: {
                value: 8,
                message: '비밀번호 확인은 최소 8자여야 합니다.',
              },
              maxLength: {
                value: 64,
                message: '비밀번호 확인은 최대 64자여야 합니다.',
              },
            })}
          />
        </InputBox>
        {errors.passwordConfirm && <p>{errors.passwordConfirm.message}</p>}
        <ButtonBox>
          <Button
            type="submit"
            $isGray
            $isValid={isValid}
            disabled={isPending || !isValid}>
            확인
          </Button>
          <Button
            type="button"
            disabled={isPending || !isValid}
            onClick={() => navigate('/')}>
            기존 계정으로 로그인
          </Button>
        </ButtonBox>
      </InputWrapper>
    </Wrapper>
  );
};

export default SignUp;

const Wrapper = styled('div')({
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

const InputWrapper = styled('form')(({ theme }) => ({
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

  p: {
    fontSize: '0.7rem',
    margin: '0.5rem 0',
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

const Button = styled('button')<{ $isGray?: boolean; $isValid?: boolean }>(
  ({ $isGray, $isValid, theme }) => ({
    width: '100%',
    height: '3.3rem',

    fontWeight: 'bold',
    fontSize: '1rem',

    color: $isGray
      ? $isValid
        ? '  #553830'
        : theme.palette.grey[300]
      : theme.palette.grey[500],
    backgroundColor: $isValid ? '#ffd43b' : theme.palette.grey[100],

    borderRadius: '5px',

    marginTop: '1rem',
    cursor: 'pointer',
  }),
);
