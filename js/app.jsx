'use strict';

//import Footer from "./footer";


const e = React.createElement;
const Link = ReactRouterDOM.Link;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  
  componentDidMount() {
    console.log('mounted app');
    // TODO: fetch todos
  }

  render() {
    return (
      <>
        <div className="App">
          <ReactRouterDOM.Routes>
            <ReactRouterDOM.Route path="/" element={<Welcome />} />
            <ReactRouterDOM.Route path="/login" element={<LoginPrompt />} />
          </ReactRouterDOM.Routes>
        </div>
        <footer className="info">
          <p>Double-click to edit a todo</p>
          <p>Created by <a href="https://www.jaredhanson.me">Jared Hanson</a></p>
          <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
          <p>Authentication powered by <a href="https://www.passportjs.org">Passport</a></p>
        </footer>
      </>
    )
    
    
    
    var user = this.props.user;
    if (!user) {
      return <Welcome />
      //return <LoginPrompt />
    }
    
    return (
      <div>
        <Header />
        <section className="main">
          <input id="toggle-all" className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">Mark all as complete</label>
          <ul className="todo-list">
            <TodoItem value="Taste JavaScript" />
            <TodoItem value="Buy a unicorn" />
          </ul>
        </section>
        <Footer />
      </div>
    );
  }
}
