// components/SearchBar.tsx
import React from 'react';

type Props = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

const SearchBar: React.FC<Props> = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search countries..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ padding: '0.5rem', width: '100%', marginBottom: '1rem' }}
    />
  );
};

export default SearchBar;