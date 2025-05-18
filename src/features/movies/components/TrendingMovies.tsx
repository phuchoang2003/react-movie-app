import React from "react";

interface TrendingMovie {
  $id: string;
  title: string;
  posterUrl: string;
}

interface TrendingMoviesProps {
  movies: TrendingMovie[];
}

const TrendingMovies: React.FC<TrendingMoviesProps> = ({ movies }) => {
  if (movies.length === 0) return null;

  return (
    <section className="trending">
      <h2>Trending Movies</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={movie.$id}>
            <p>{index + 1}</p>
            <img src={movie.posterUrl} alt={movie.title} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TrendingMovies;
