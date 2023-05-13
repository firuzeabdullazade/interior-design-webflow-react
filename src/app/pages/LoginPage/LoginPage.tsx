import './LoginPage.scss';
import { Link } from 'react-router-dom';
import { loadUser } from '../../shared/UserWidget/userWidget.slice';
import { useDispatch } from 'react-redux';
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
  return (
    <div className="login-container">
      <h1>Log in</h1>
      <form>
        <input type="email" className="input-field" placeholder="Email" />
        <input type="password" className="input-field" placeholder="Password" />
        <button type="button" onClick={onLogInButtonClick}>
          Log In
        </button>
      </form>
      <div className="no-account">
        If you don't have any account:
        <nav>
          <Link to="register" className="register">
            Register
          </Link>
        </nav>
      </div>
    </div>
  );
};
