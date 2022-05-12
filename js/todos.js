function Todos() {
  let auth = useAuthContext();
  const [todos, setTodos] = React.useState([]);
  
  
  React.useEffect(() => {
    console.log('FETCHING TODOS...');
    
    if (!auth.user) { return; }
    
    async function fetchData() {
      let response = await fetch('/todos');
      // TODO: error handling
      let json = await response.json();
      console.log(json);
      setTodos(json);
    }
    fetchData();
  }, []);// TODO: put empty array here }, []);

  
  const handleCreate = async (todo) => {
    console.log('oncreate');
    console.log(todo);
    
    const response = await fetch('/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    });
    // TODO: error handling
    let json = await response.json();
    console.log(json);
  };
  
  
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
      <nav className="nav">
        <ul>
          <li className="user">{auth.user.username}</li>
          <li>
            <form action="/logout" method="post">
              <button className="logout" type="submit">Sign out</button>
            </form>
          </li>
        </ul>
      </nav>
      <Header>
        <NewTodoForm onCreate={handleCreate} />
      </Header>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todos.map((todo) =>
            <TodoItem key={todo.id.toString()} value={todo} />
          )}
        </ul>
      </section>
      <Footer />
    </section>
  );
}

window.Todos = Todos;
