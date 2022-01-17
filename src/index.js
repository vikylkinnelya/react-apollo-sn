import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ApolloClient from 'apollo-boost' //только если будут запросы и мутации
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from 'apollo-cache-inmemory'

const client = new ApolloClient({
  uri: 'https://graphql.eu.fauna.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: "Bearer fnAEdHt4H4AAyNM9gyJZi-vNcVCta04LUHEVkAxt"
  },
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
