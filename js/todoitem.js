'use strict';

function TodoItem({ value, editing, onToggle, onBeginEditing, onCancelEditing, onUpdate, onDestroy }) {
  // WIP: add editing state here and finish implementing editing
  
  const [editedTitle, setEditedTitle] = React.useState(value.title);
  
  const ENTER_KEY = 13;
  const ESCAPE_KEY = 27;
  
  const handleToggle = (event) => {
    value.completed = !value.completed;
    onToggle(value);
  };
  
  const handleDoubleClick = (event) => {
    onBeginEditing(value);
  };
  
  const handleKeyDown = (event) => {
    switch (event.keyCode) {
    case ENTER_KEY:
      handleSubmit(event);
      break;
    case ESCAPE_KEY:
      setEditedTitle(value.title);
      onCancelEditing(value);
      break;
    }
  };
  
  const handleSubmit = (event) => {
    var title = editedTitle.trim();
    if (title) {
      value.title = title;
      onUpdate(value);
    } else {
      onDestroy(value);
    }
  };
  
  const handleClick = async (event) => {
    onDestroy(value);
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
        : <input className="edit"
            value={editedTitle}
            onChange={event => { setEditedTitle(event.target.value); }}
            onKeyDown={handleKeyDown}
            onBlur={handleSubmit}
          />
      }
    </li>
  );
}

window.TodoItem = TodoItem;
