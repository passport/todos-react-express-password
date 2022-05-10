function Welcome() {
  return (
    <section className="todohome">
      <header>
        <h1>todos</h1>
      </header>
      <section>
        <h2>todos helps you get things done</h2>
        <a className="button" href="/login">Sign in</a>
      </section>
    </section>
  );
}

window.Welcome = Welcome;
