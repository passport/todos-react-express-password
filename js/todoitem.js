'use strict';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.state = { liked: false };
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('destroy click')
    console.log(this);
    
    //this.setState(prevState => ({
    //  isToggleOn: !prevState.isToggleOn
    //}));
  }

  render() {
    return (
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>{this.props.value}</label>
          <button className="destroy" onClick={this.handleClick}></button>
        </div>
        <input className="edit" defaultValue="Create a TodoMVC template" />
      </li>
    );
  }
}

window.TodoItem = TodoItem;
