'use strict';

function TodoItem({ value, onToggle }) {
  
  const handleToggle = (event) => {
    value.completed = !value.completed;
    onToggle(value);
  };
  
  const handleClick = async (event) => {
    console.log('destroy click')
    event.preventDefault();
  };

  return (
    <li className={value.completed ? 'completed' : ''}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={value.completed ? true : false} onChange={handleToggle} />
        <label>{value.title}</label>
        <button className="destroy" onClick={handleClick}></button>
      </div>
      <input className="edit" defaultValue="Create a TodoMVC template" />
    </li>
  );
}

window.TodoItem = TodoItem;
