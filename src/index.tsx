import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PersonView from './components/Person';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import ApiConfig from "./config/ApiConfig";

const client = new ApolloClient({
  uri: `${ApiConfig.graphqlURL}`,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
          <Router>
            <>
              <Switch>
                  <Route exact path="/" component={App} />
                  <Route exact path="/person" component={PersonView} />
              </Switch>
            </>
          </Router>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
