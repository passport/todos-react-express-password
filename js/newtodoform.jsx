'use strict';

function NewTodoForm({ onCreate }) {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const title = formData.get('title');
    onCreate({ title });
    // TODO: error handling
    // TODO: clear form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className="new-todo" name="title" placeholder="What needs to be done?" autoFocus />
    </form>
  );
}

window.NewTodoForm = NewTodoForm;
