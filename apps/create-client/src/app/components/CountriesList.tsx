import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const COUNTRIES = gql`
  {
    countries {
      id
      name
      continent
  }
}`;

export const CountriesList = () => {
  const { loading, error, data } = useQuery(COUNTRIES);

  if (loading) return <p>Загрузка...</p>
  if (error) return <p>Ошибка.</p>

  return (
    <ul>
      {data.countries.map(({name, continent, id}) => <li key={id}>{name} - {continent}</li>)}
    </ul>
  )
}
