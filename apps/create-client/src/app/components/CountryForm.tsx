import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';

const ADD_COUNTRY = gql`
  mutation MyQuery($name: String!, $continent: String!) {
    insert_countries_one(object: {name: $name, continent: $name}) {
      id,
      name
    }
  }
`;

export const CountryForm = () => {
  const [state, setState] = useState({
    name: '',
    continent: ''
  });
  const [addCountry] = useMutation(ADD_COUNTRY);

  function submitForm(event) {
    event.preventDefault();
    addCountry({variables: state});
  }

  return (
    <form onSubmit={submitForm}>
      <div className="form-group">
        <label htmlFor="name">Название</label>
        <input type="text" id="name" onChange={e => setState({ ...state, name: e.target.value })}/>
      </div>
      <div className="form-group">
        <label htmlFor="continent">Континент</label>
        <input type="text" id="continent" onChange={e => setState({ ...state, continent: e.target.value })}/>
      </div>
      <button type="submit">Добавить</button>
    </form>
  )
}
