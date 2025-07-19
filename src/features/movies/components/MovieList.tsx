import React from "react";
import type { Movie } from "../../../types/movie";
import MovieCard from "./MovieCard";
import Spinner from "../../../components/atoms/Spinner";

interface MovieListProps {
  movies: Movie[];
  isLoading: boolean;
  errorMessage: string;
}

const MovieList: React.FC<MovieListProps> = ({
  movies,
  isLoading,
  errorMessage,
}) => {
  return (
    <section className="all-movies">
      <h2 className="mt-[40px]">All Movies</h2>
      {isLoading ? (
        <Spinner />
      ) : errorMessage ? (
        <p className="text-red-500">{errorMessage}</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default MovieList;
