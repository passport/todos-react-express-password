'use strict';

function TodoItem({ value, editing, onToggle, onEdit }) {
  
  const handleToggle = (event) => {
    value.completed = !value.completed;
    onToggle(value);
  };
  
  const handleEdit = (event) => {
    console.log('editing...')
    onEdit(value);
  };
  
  const handleClick = async (event) => {
    console.log('destroy click')
    event.preventDefault();
  };

  return (
    <li className={classNames({
      completed: value.completed,
      editing: editing
    })}>
      {!editing
        ? <div className="view">
            <input className="toggle" type="checkbox" checked={value.completed ? true : false} onChange={handleToggle} />
            <label onDoubleClick={handleEdit}>{value.title}</label>
            <button className="destroy" onClick={handleClick}></button>
          </div>
        : <input className="edit" defaultValue={value.title} />
      }
    </li>
  );
}

window.TodoItem = TodoItem;
