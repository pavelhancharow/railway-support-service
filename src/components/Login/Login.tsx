import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { ILogin } from 'src/models/IForms';
import { LoginBox } from 'src/components/Login/LoginStyles';
import {
  checkAdmin,
  toggleModalLogin,
} from 'src/store/reducers/PageSlice/actionCreator';
import { MyButton } from '../UI/MyButton/MyButton';
import MyModal from '../UI/MyModal/MyModal';
import { adminTable } from 'src/db/entities/AdminTable';

export const Login: FC = (): JSX.Element => {
  const { isModalLogin, isAdmin } = useAppSelector(
    (state) => state.pageReducer
  );
  const dispatch = useAppDispatch();
  const { register, handleSubmit, formState, reset } = useForm<ILogin>();
  const [incorrect, setIncorrect] = useState<boolean>(false);
  const { errors, isSubmitSuccessful } = formState;

  const onSubmit = async (data: ILogin) => {
    const response = await adminTable.get();

    if (data.login === response?.name && data.password === response?.password) {
      await dispatch(checkAdmin());
    } else {
      setIncorrect(true);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) reset({ login: '', password: '' });
    if (isAdmin) {
      setIncorrect(false);
      dispatch(toggleModalLogin(false));
    }
  }, [dispatch, isSubmitSuccessful, isAdmin, reset]);

  return (
    <MyModal
      $display={isModalLogin}
      handleClick={() => dispatch(toggleModalLogin(false))}
    >
      <LoginBox
        className={isModalLogin ? 'show' : ''}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3>Login</h3>
        <label htmlFor="login">
          <input
            type="text"
            placeholder="Enter your login"
            {...register('login', { required: true })}
          />
          {errors.login && <span>This field is required</span>}
        </label>
        <label htmlFor="password">
          <input
            type="password"
            placeholder="Enter your password"
            {...register('password', {
              required: 'This field is required',
              minLength: {
                value: 5,
                message: 'Must be at least 5 characters',
              },
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </label>
        {incorrect && <b>Incorrect login or password</b>}
        <MyButton type="submit">LogIn</MyButton>
      </LoginBox>
    </MyModal>
  );
};
