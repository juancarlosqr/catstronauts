import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import GlobalStyles from './styles';
import Pages from './pages';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_API_URI || 'http://localhost:4000',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Pages />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
