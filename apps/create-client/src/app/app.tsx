import React from 'react';

import './app.css';
import { CountryForm } from './components/CountryForm';
import { CountriesList } from './components/CountriesList';
import { MessageEmulation } from './components/MessageEmulation';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';


const client = new ApolloClient({
  uri: 'http://localhost:8080/v1/graphql',
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="app">
          <CountryForm />
          <CountriesList />
          <hr/>
          <MessageEmulation />
      </div>
    </ApolloProvider>
  );
};

export default App;
