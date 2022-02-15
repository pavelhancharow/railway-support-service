import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { IRegistration } from 'src/models/IForms';
import { checkUser } from 'src/services/checkUser';
import { LoginBox } from 'src/shared/Login';
import {
  setUser,
  toggleModalRegistration,
} from 'src/store/actionCreators/PageCreator';
import { MyButton } from './UI/MyButton';
import MyModal from './UI/MyModal';

export const Registration: FC = (): JSX.Element => {
  const { pageReducer, railwayReducer } = useAppSelector((state) => state);
  const { register, handleSubmit, formState, reset } = useForm<IRegistration>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isModalRegistration } = pageReducer;
  const { errors, isSubmitSuccessful } = formState;

  const onSubmit = async (data: IRegistration) => {
    const user = checkUser(data, railwayReducer.ticket);
    await dispatch(setUser(data.email));
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ login: '', email: '' });
      dispatch(toggleModalRegistration(false));
      navigate('/success');
    }
  }, [dispatch, isSubmitSuccessful, navigate, reset]);

  return (
    <MyModal
      $display={isModalRegistration}
      handleClick={() => dispatch(toggleModalRegistration(false))}
    >
      <LoginBox
        className={isModalRegistration ? 'show' : ''}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3>Registration</h3>
        <label htmlFor="login">
          <input
            type="text"
            placeholder="Enter your login"
            {...register('login', { required: true })}
          />
          {errors.login && <span>This field is required</span>}
        </label>
        <label htmlFor="email">
          <input
            type="text"
            placeholder="Enter your email"
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: 'Enter a valid email',
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </label>
        <MyButton type="submit">Reserve</MyButton>
      </LoginBox>
    </MyModal>
  );
};
