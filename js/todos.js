function Todos() {
  const auth = useAuthContext();
  const [todos, setTodos] = React.useState([]);
  const [newTodo, setNewTodo] = React.useState();
  const [editingTodo, setEditingTodo] = React.useState();
  
  
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
  
  const handleCreate = async () => {
    const response = await fetch('/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    });
    // TODO: error handling
    const json = await response.json();
    setTodos(todos => todos.concat([json]));
    setNewTodo('')
  };
  
  const handleToggle = async (todo) => {
    const response = await fetch(todo.url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ completed: todo.completed })
    });
    // TODO: error handling
    const json = await response.json();
    setTodos(todos => todos.map(i => i.id !== json.id ? i : json));
  };
  
  
  if (!auth.user) {
    return <Home />
  }
  
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
        <NewTodoInput value={newTodo ? newTodo.title : ''} onChange={todo => setNewTodo(todo)} onSubmit={handleCreate} />
      </Header>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todos.map((todo) =>
            <TodoItem key={todo.id.toString()} value={todo}
                      onToggle={handleToggle}
                      onEdit={todo => setEditingTodo(todo)}
                      editing={(editingTodo && editingTodo.id) === todo.id} />
          )}
        </ul>
      </section>
      {todos.length > 0 &&
        <Footer />
      }
    </section>
  );
}

window.Todos = Todos;
