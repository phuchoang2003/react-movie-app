import React from "react";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const Search: React.FC<SearchProps> = ({
  value,
  onChange,
  placeholder = "Search for movies...",
}) => {
  return (
    <div className="search">
      <div>
        <img src="/search.svg" alt="search" />
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
