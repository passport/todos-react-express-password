'use strict';

//import Footer from "./footer";


const e = React.createElement;
const Link = ReactRouterDOM.Link;

let AuthContext = React.createContext(null);

console.log(AuthContext);


function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);
  //let [user, setUser] = React.useState({ id: 1, username: 'alice' });

  const login = async (username, password) => {
    const response = await fetch('/login/password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    // TODO: error handling
    const { user } = await response.json();
    setUser(user);
  };

  const logout = async () => {
    const response = await fetch('/logout', {
      method: 'POST'
    });
    // TODO: error handling
    setUser(null);
  };

  const value = { user, login, logout };
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}


function useAuth() {
  return React.useContext(AuthContext);
}

window.useAuth = useAuth;



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
      <AuthProvider value='foo'>
        <div className="App">
          <ReactRouterDOM.Routes>
            <ReactRouterDOM.Route path="/" element={<Todos />} />
            <ReactRouterDOM.Route path="/active" element={<Todos />} />
            <ReactRouterDOM.Route path="/completed" element={<Todos />} />
            <ReactRouterDOM.Route path="/login" element={<LoginPrompt />} />
            <ReactRouterDOM.Route path="/signup" element={<SignupPrompt />} />
          </ReactRouterDOM.Routes>
        </div>
        <footer className="info">
          <p>Double-click to edit a todo</p>
          <p>Created by <a href="https://www.jaredhanson.me">Jared Hanson</a></p>
          <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
          <p>Authentication powered by <a href="https://www.passportjs.org">Passport</a></p>
        </footer>
      </AuthProvider>
      </>
    );
  }
}
