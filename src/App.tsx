import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Provider } from "react-redux";
import { store } from "./app/store";

const client = new ApolloClient({
  uri: 'http://localhost:3000/dev/graphql',
  cache: new InMemoryCache()
});

const Home = () => {
    return <p>Home Component</p>
}

const About = () => {
  return <p>About Component</p>
}

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
          <Router>
            <>
              <Link to={'/'}>Home</Link>
              <Link to={'/about'}>About</Link>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
              </Switch>
            </>
          </Router>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
