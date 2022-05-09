'use strict';

const e = React.createElement;

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    console.log('#render');
    if (this.state.liked) {
      return 'You liked this.';
    }

    /*
    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
    */
    return (
      <li>
        <div className="view">
          <input className="toggle" type="checkbox"/>
          <label>{this.props.value}</label>
          <button className="destroy"></button>
        </div>
        <input className="edit" defaultValue="Create a TodoMVC template"/>
      </li>
    );
  }
}

window.TodoItem = TodoItem;

/*
const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
console.log('redering like button');
root.render(e(LikeButton));
*/

