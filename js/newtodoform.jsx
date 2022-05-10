'use strict';

class NewTodoForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log('submit')
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus />
      </form>
    );
  }
}

window.NewTodoForm = NewTodoForm;
