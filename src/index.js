import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ApolloClient from 'apollo-client' //только если будут запросы и мутации
import { ApolloProvider } from "@apollo/react-hooks";
import { WebSocketLink } from 'apollo-link-ws' //для подписки на обновления
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
  link: new WebSocketLink({
    uri: 'wss://graphql.eu.fauna.com/graphql',
    options: {
      reconnect: true,
      connectionParams: {
        headers: {
          Authorization: "Bearer fnAEcpIx1XAAxyZb-o6nwdTiykrfkFNJsLh5ZSDU"
        }
      }
    }
  }),
  cache: new InMemoryCache()

})


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
