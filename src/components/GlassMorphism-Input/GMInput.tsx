import './GmStyle.css';

export const GMInput = () => {
  return (
    <main className="gm-input" aria-labelledby="login-title">
      <div className="glass-container" role="region" aria-label="Login form">
        <h1 id="login-title" className="title">
          Log in
        </h1>

        <form method="post" action="/#" noValidate aria-describedby="login-hint">
          <div className="input-group">
            <label htmlFor="login-username">Username</label>
            <input
              id="login-username"
              name="username"
              type="text"
              required
              autoComplete="username"
              inputMode="text"
            />
          </div>

          <div className="input-group">
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              name="password"
              type="password"
              required
              autoComplete="current-password"
            />
          </div>

          <div className="remember-forgot">
            <label htmlFor="remember">
              <input id="remember" name="remember" type="checkbox" />
              Remember me
            </label>

            <a href="/forgot-password">Forgot password?</a>
          </div>

          <div className="form-actions">
            <button type="submit" className="login-btn">
              Log in
            </button>
          </div>

          <div className="register-link">
            <span>Don't have an account?</span>
            <a href="/register">Register</a>
          </div>

          <div id="form-error" aria-live="polite" className="form-error" />
        </form>
      </div>
    </main>
  );
};
