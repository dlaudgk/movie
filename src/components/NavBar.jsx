import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/NavBar.css';

const NavBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value); // 검색어 변경 시 부모 컴포넌트에 전달
  };

  return (
    <nav className="navbar">
      <h1>Movie App</h1>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={handleSearch}
        className="search-input"
      />
      <div>
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};
export default NavBar;
