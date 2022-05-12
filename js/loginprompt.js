function LoginPrompt() {
  let navigate = ReactRouterDOM.useNavigate();
  let auth = useAuthContext();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    let formData = new FormData(event.currentTarget);
    let username = formData.get('username');
    let password = formData.get('password');
    
    let response = await fetch('/login/password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    // TODO: error handling
    let json = await response.json();
    auth.login(json.user);
    navigate('/');
  }
  
  
  return (
    <section className="prompt">
      <h3>todos</h3>
      <h1>Sign in</h1>
      <form action="/login/password" method="post" onSubmit={handleSubmit}>
        <section>
          <label htmlFor="username">Username</label>
          <input id="username" name="username" type="text" autoComplete="username" required autoFocus />
        </section>
        <section>
          <label htmlFor="current-password">Password</label>
          <input id="current-password" name="password" type="password" autoComplete="current-password" required />
        </section>
        <button type="submit">Sign in</button>
      </form>
      <hr />
      <p className="help">Don't have an account? <ReactRouterDOM.Link to="/signup">Sign up</ReactRouterDOM.Link></p>
    </section>
  );
}

window.LoginPrompt = LoginPrompt;
