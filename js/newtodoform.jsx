'use strict';

function NewTodoInput({ value, onChange, onSubmit }) {
  const ENTER_KEY = 13;
  
  const handleKeyDown = (event) => {
    if (event.keyCode !== ENTER_KEY) { return; }
    var value = event.target.value.trim();
    if (!value) { return; }
    onSubmit();
  };
  
  return (
    <input className="new-todo" name="title" value={value} onChange={event => onChange({ title: event.target.value })} onKeyDown={handleKeyDown} placeholder="What needs to be done?" autoFocus />
  );
}

window.NewTodoForm = NewTodoInput;
