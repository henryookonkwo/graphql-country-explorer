// main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
  // The 'cache' property specifies the caching strategy for Apollo Client.
  // Here, 'new InMemoryCache()' creates an in-memory cache instance,
  // which Apollo Client uses to store and manage query results locally.
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
