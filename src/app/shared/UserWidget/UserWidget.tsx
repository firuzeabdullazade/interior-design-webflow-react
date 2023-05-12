import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import "./UserWidget.scss";
export const UserWidget = () => {
  const userWidgetState = useSelector((state: RootState) => state.userWidget);
  return (
    <div className="user-widget">
      <img src={userWidgetState.avatarLink} alt="Avatar" />
      <div className="personal-info">
        <div className="user-name">{userWidgetState.name}</div>
        <div className="user-status">{userWidgetState.status}</div>
      </div>
    </div>
  );
};
