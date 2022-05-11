function LoginPrompt() {
  let navigate = ReactRouterDOM.useNavigate();
  let auth = useAuthContext();
  console.log(auth);
  
  //function handleSubmit(event) {
  const handleSubmit = async (event) => {
    console.log('handle submit...');
    event.preventDefault();
    
    
    const response = await fetch('/login/password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: "My post title",
        body: "My post content."
      })
    });
    
    console.log(response.ok);
    console.log(response.status);
    
    //const data = await response.json();
    
    
    auth.login({ username: 'alice' });
    
    navigate(`/`);
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
