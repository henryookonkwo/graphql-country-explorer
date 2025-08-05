// App.tsx
import React from 'react';
import CountryList from './components/CountryList';
import SearchBar from './components/SearchBar';

function App() {
  const [searchTerm, setSearchTerm] = React.useState('');

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🌍 Country Explorer</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CountryList searchTerm={searchTerm} />
    </div>
  );
}

export default App;