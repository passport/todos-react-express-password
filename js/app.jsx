'use strict';

//import Footer from "./footer";


const e = React.createElement;

class App extends React.Component {
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
      <div>
        <button>
          App
        </button>
        <Footer/>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(e(App));
