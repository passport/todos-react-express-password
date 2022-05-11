function Todos() {
  let auth = useAuthContext();
  console.log('X');
  console.log(auth);
  
  
  if (!auth.user) {
    return <Home />
  }
  
  /*
  var user = this.props.user;
  if (!user) {
    return <Welcome />
    //return <LoginPrompt />
  }
  */
  
  return (
    <section className="todoapp">
      <Header />
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          <TodoItem value="Taste JavaScript" />
          <TodoItem value="Buy a unicorn" />
        </ul>
      </section>
      <Footer />
    </section>
  );
}

window.Todos = Todos;
