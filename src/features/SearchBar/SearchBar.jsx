import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [, setSearchParams] = useSearchParams();

  const onSearchTermChange = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
  };

  const submitSearchTerm = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.set('search', searchTerm);
    setSearchParams(params);
    setSearchTerm('');
  };

  return (
    <form className="h-auto self-center" onSubmit={submitSearchTerm}>
      <input
        className="border border-gray-400 rounded-3xl p-2 text-sm"
        type="text"
        name="search"
        id="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={onSearchTermChange}
      />
    </form>
  );
}

export default SearchBar;
