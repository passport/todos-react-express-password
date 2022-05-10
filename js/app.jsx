'use strict';

//import Footer from "./footer";


const e = React.createElement;

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
    var user = this.props.user;
    if (!user) {
      return <Welcome />
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

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(e(App));
var user = { name: 'Alice' };
root.render(<App user={user} />);
