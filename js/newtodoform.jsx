'use strict';

function NewTodoForm({ value, onChange, onSubmit }) {
  
  return (
    <form onSubmit={event => { event.preventDefault(); onSubmit(); }}>
      <input className="new-todo" name="title" value={value} onChange={event => onChange({ title: event.target.value })} placeholder="What needs to be done?" autoFocus />
    </form>
  );
}

window.NewTodoForm = NewTodoForm;
