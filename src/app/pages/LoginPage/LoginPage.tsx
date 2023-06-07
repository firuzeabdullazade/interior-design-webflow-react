import './LoginPage.scss';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { User } from '../../../models/User';
import { baseUrl } from '../../shared/consts';
import { loadUser } from '../../shared/UserWidget/userWidget.slice';
import { useDispatch } from 'react-redux';
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  // api call will be here a bit later =)
  const onSubmit = (data: FormData) => {
    fetch(`${baseUrl}/users/login`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: data.email,
        password: data.password,
      }),
    })
      .then((response) => response.json())
      .then((user: User) => {
        dispatch(loadUser(user));
      });
  };
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
