import { Link } from 'react-router-dom';

export const Login = () => {
  const Submit = (ev) => {
    ev.preventDefault();
  };

  return (
    <div className="login-signup-form animated fadeinDown">
      <div className="form">
        <form onSubmit={Submit}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="btn btn-block">
            Login
          </button>
          <p className="message">
            Not Registered? <Link to="/register">Create a new account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
