'use strict';

function TodoItem({ value, editing, onToggle, onEdit }) {
  // WIP: add editing state here and finish implementing editing
  
  const [editedTitle, setEditedTitle] = React.useState(value.title);
  
  const ENTER_KEY = 13;
  const ESCAPE_KEY = 27;
  
  const handleToggle = (event) => {
    value.completed = !value.completed;
    onToggle(value);
  };
  
  const handleDoubleClick = (event) => {
    console.log('editing...')
    onEdit(value);
  };
  
  const handleKeyDown = (event) => {
    console.log('key down');
    console.log(event.keyCode);
    console.log(event.which)
    
    /*
    if (event.keyCode !== ENTER_KEY) { return; }
    var value = event.target.value.trim();
    if (!value) { return; }
    onSubmit();
    */
  };
  
  const handleBlur = (event) => {
    console.log('submit...')
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
            <label onDoubleClick={handleDoubleClick}>{value.title}</label>
            <button className="destroy" onClick={handleClick}></button>
          </div>
        : <input className="edit" value={editedTitle}
            onChange={event => { setEditedTitle(event.target.value); }}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
          />
      }
    </li>
  );
}

window.TodoItem = TodoItem;
