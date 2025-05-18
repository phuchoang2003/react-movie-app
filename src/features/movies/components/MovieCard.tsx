import React from "react";

interface Movie {
  id: string;
  title: string;
  poster_path: string;
  vote_average: number;
}

interface MovieCardProps {
  movie: Movie;
  onClick?: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/placeholder-image.jpg";

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
      onClick={() => onClick?.(movie)}
    >
      <img
        src={imageUrl}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {movie.title}
        </h3>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">★</span>
          <span className="ml-1 text-gray-600">
            {movie.vote_average.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
