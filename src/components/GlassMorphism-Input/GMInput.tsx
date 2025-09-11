import './style.css';
export const GMInput = () => {
  return (
    <section>
      <div className="glass-container">
        <h2 className="p-4 text-center text-2xl font-bold">Login</h2>
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
              <input type="text" name="password" required />
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
