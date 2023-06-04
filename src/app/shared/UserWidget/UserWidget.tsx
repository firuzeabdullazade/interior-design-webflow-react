import './UserWidget.scss';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
export const UserWidget = () => {
  const currentUser = useSelector((state: RootState) => state.userWidget.currentUser);
  return (
    <>
      {currentUser ? (
        <div className="user-widget">
          <div className="personal-info">
            <div className="user-name">
              {currentUser.firstName} {currentUser.lastName}
            </div>{' '}
            <div className="avatar">
              {' '}
              <img src={currentUser.avatar} alt="" />
            </div>
          </div>
          <div className="user-email">{currentUser.email}</div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
