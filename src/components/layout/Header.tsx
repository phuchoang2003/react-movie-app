import React from "react";
import Search from "../common/Search";

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <header>
      <img src="/hero.png" alt="Hero Banner" />
      <h1>
        Find <span className="text-gradient">Movies</span> You'll Enjoy Without
        the Hassle
      </h1>
      <Search
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search for movies..."
      />
    </header>
  );
};

export default Header;
