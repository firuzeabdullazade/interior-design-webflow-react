import './LoginPage.scss';
import { Link } from 'react-router-dom';
import { loadUser } from '../../shared/UserWidget/userWidget.slice';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export const LoginPage = () => {
  const dispatch = useDispatch();
  const onLogInButtonClick = () => {
    const user = {
      id: 14,
      name: 'Benry Roll',
      email: 'benry.roll@mail.com',
      status: 'Regular',
    };

    const payload = {
      name: user.name,
      status: user.status,
    };

    dispatch(loadUser(payload));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  // api call will be here a bit later =)
  const onSubmit = (data: FormData) => console.log(data);
  return (
    <div className="login-container">
      <h1>Log in</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email: <input type="email" {...register('email')} />
        </label>
        <p className="validation-error">{errors.email?.message}</p>
        <label>
          Password: <input type="password" {...register('password')} />
        </label>
        <p className="validation-error">{errors.password?.message}</p>
        <button type="submit">Log In</button>
      </form>
      <div className="no-account">
        If you don't have any account:
        <nav>
          <Link to="/register" className="register">
            Register
          </Link>
        </nav>
      </div>
    </div>
  );
};
