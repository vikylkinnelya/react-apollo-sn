import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri: "https://graphql.eu.fauna.com/graphql",
  credentials: 'same-origin'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "Bearer fnAEdsE-CUAAwP0pmzWKMCp-ME_E5-uvA8829VmZ",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})



ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Auth0Provider
        useRefreshTokens={true}
        domain={'https://dev-ep8grcpp.us.auth0.com'}
        clientId={'ydIpzMjZYBT7kGxCLxgcGyYofefopV47'}
        audience={'https://db.fauna.com/db/ytzg1c13nyrcq'}
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
