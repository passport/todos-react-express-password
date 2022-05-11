function SignupPrompt() {
  let navigate = ReactRouterDOM.useNavigate();
  
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
    
    navigate(`/`);
  }
  
  
  return (
    <section className="prompt">
      <h3>todos</h3>
      <h1>Sign up</h1>
      <form action="/signup" method="post" onSubmit={handleSubmit}>
        <section>
          <label htmlFor="username">Username</label>
          <input id="username" name="username" type="text" autoComplete="username" required />
        </section>
        <section>
          <label htmlFor="new-password">Password</label>
          <input id="new-password" name="password" type="password" autoComplete="new-password" required />
        </section>
        <button type="submit">Sign up</button>
      </form>
      <hr />
      <p className="help">Already have an account? <ReactRouterDOM.Link to="/login">Sign in</ReactRouterDOM.Link></p>
    </section>
  );
}

window.SignupPrompt = SignupPrompt;
