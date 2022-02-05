import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { ILogin } from 'src/models/IForms';
import { LoginBox } from 'src/shared/Login';
import {
  checkAdmin,
  toggleModalLogin,
} from 'src/store/actionCreators/PageCreator';
import { MyButton } from './UI/MyButton';
import MyModal from './UI/MyModal';

export const Login: FC = (): JSX.Element => {
  const { isModalLogin, isAdmin } = useAppSelector(
    (state) => state.pageReducer
  );
  const dispatch = useAppDispatch();
  const { register, handleSubmit, formState, reset } = useForm<ILogin>();
  const onSubmit = (data: ILogin) => {
    dispatch(checkAdmin(data.login));
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) reset({ login: '' });
    if (isAdmin) dispatch(toggleModalLogin(false));
  }, [dispatch, formState, isAdmin, reset]);

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
          {formState.errors.login && <span>This field is required</span>}
        </label>
        <MyButton type="submit">LogIn</MyButton>
      </LoginBox>
    </MyModal>
  );
};
