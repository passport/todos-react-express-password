'use strict';

function NewTodoInput({ value, onChange, onSubmit }) {
  const ENTER_KEY = 13;
  
  const handleKeyDown = (event) => {
    switch (event.keyCode) {
    case ENTER_KEY:
      var value = event.target.value.trim();
      if (value) { onSubmit(); }
      break;
    }
  };
  
  return (
    <input className="new-todo" name="title" value={value} onChange={event => onChange({ title: event.target.value })} onKeyDown={handleKeyDown} placeholder="What needs to be done?" autoFocus />
  );
}

window.NewTodoForm = NewTodoInput;
