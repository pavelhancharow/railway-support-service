import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { IRegistrationForm } from 'src/models/IForms';
import { checkUser } from 'src/services/checkUser';
import { LoginBox } from 'src/components/Login/LoginStyles';
import {
  setUser,
  toggleModalRegistration,
} from 'src/store/reducers/PageSlice/actionCreator';
import { MyButton } from '../UI/MyButton/MyButton';
import MyModal from '../UI/MyModal/MyModal';

export const TicketRegistration: FC = (): JSX.Element => {
  const { pageReducer, railwayReducer } = useAppSelector((state) => state);
  const { register, handleSubmit, formState, reset } =
    useForm<IRegistrationForm>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isModalRegistration } = pageReducer;
  const { errors, isSubmitSuccessful } = formState;

  const onSubmit = async (data: IRegistrationForm) => {
    checkUser(data, railwayReducer.ticket);
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
