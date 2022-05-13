function Footer({ count, completed, onClearCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count"><strong>{count}</strong> {count == 1 ? 'item': 'items'} left</span>
      <ul className="filters">
        <li>
          <a className="selected" href="#/">All</a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      {completed &&
        <button className="clear-completed" onClick={onClearCompleted}>Clear completed</button>
      }
    </footer>
  );
}

window.Footer = Footer;
