import "./RegisterPage.scss";

export const RegisterPage = () => {
  return (
    <>
      <div className="register-container">
        <h1>Register</h1>
        <form>
          <input
            type="email"
            className="input-field"
            placeholder="Email Address"
          />
          <input
            type="password"
            className="input-field"
            placeholder="Password"
          />
          <input
            type="password"
            className="input-field"
            placeholder="Confirm Password"
          />
          <button type="button">Register</button>
        </form>
      </div>
    </>
  );
};
