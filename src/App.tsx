import React from "react";
import { Outlet } from "react-router";
import Header from "./components/layouts/Header";
import TrendingMovies from "./features/movies/components/TrendingMovies";
import MovieList from "./features/movies/components/MovieList";
import { useMovies } from "./hooks/useMovies";

const App = () => {
  const {
    searchTerm,
    setSearchTerm,
    errorMessage,
    movieList,
    isLoading,
    trendingMovies,
  } = useMovies();

  return (
    <main>
      <div className="pattern">
        <div className="wrapper">
          <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Outlet />
          <TrendingMovies movies={trendingMovies} />
          <MovieList
            movies={movieList}
            isLoading={isLoading}
            errorMessage={errorMessage}
          />
        </div>
      </div>
    </main>
  );
};

export default App;
