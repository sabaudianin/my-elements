import './GmStyle.css';

export const GMInput = () => {
  return (
    <section className="gm-input">
      <div className="glass-container">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label>
              Username:
              <input type="text" name="user" required />
            </label>
          </div>
          <div className="input-group">
            <label>
              Password:
              <input type="password" name="password" required />
            </label>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
          <div className="register-link">
            <span>Don't have account yet?</span>
            <a href="#">Register</a>
          </div>
        </form>
      </div>
    </section>
  );
};
