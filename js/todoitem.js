'use strict';

function TodoItem(props) {
  
  /*
  constructor(props) {
    super(props);
    this.id = props.id;
    this.state = { liked: false };
    
    this.handleClick = this.handleClick.bind(this);
  }
  */

  const handleClick = async (event) => {
    console.log('destroy click')
    event.preventDefault();
  };

  /*
  handleClick() {
    console.log('destroy click')
    console.log(this);
    
    //this.setState(prevState => ({
    //  isToggleOn: !prevState.isToggleOn
    //}));
  }
  */

  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>{props.value.title}</label>
        <button className="destroy" onClick={handleClick}></button>
      </div>
      <input className="edit" defaultValue="Create a TodoMVC template" />
    </li>
  );
}

window.TodoItem = TodoItem;
