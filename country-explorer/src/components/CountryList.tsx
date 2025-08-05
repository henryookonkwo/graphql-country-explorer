// components/CountryList.tsx
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from "../graphql/queries"

function CountryList() {
  const { data, loading, error } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.countries.map((country: any) => (
        <div key={country.code} style={{ border: '1px solid #ccc', margin: '1rem', padding: '1rem' }}>
          <h3>{country.emoji} {country.name}</h3>
          <p>Capital: {country.capital}</p>
          <p>Currency: {country.currency}</p>
          <p>Continent: {country.continent.name}</p>
        </div>
      ))}
    </div>
  );
}

export default CountryList;
